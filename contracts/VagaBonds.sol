pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol";
import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";

contract IkigaiNFT is ERC721, Ownable {
    IUniswapV2Router02 public uniswapRouter;
    IUniswapV2Pair public liquidityPair;
    address public WETH;

    uint256 public constant MINT_PRICE = 1 ether;
    uint256 public constant MINT_LIMIT = 10000;

    uint256 public totalMinted;
    uint256 public lockedLiquidity;

    struct Proposal {
        uint256 amount;
        uint256 endTime;
        uint256 yesVotes;
        mapping(address => bool) hasVoted;
    }

    Proposal[] public proposals;

    constructor(address _uniswapRouter) ERC721("Ikigai NFT", "IKG") {
        uniswapRouter = IUniswapV2Router02(_uniswapRouter);
        WETH = uniswapRouter.WETH();
    }

    function mint(uint256 amount) external payable {
        require(totalSupply() + amount <= MINT_LIMIT, "Mint limit reached");
        require(msg.value >= MINT_PRICE * amount, "Ether value sent is not correct");

        uint256 liquidityAmount = (msg.value * 80) / 100;
        lockedLiquidity += liquidityAmount;

        for (uint256 i = 0; i < amount; i++) {
            _mint(msg.sender, totalMinted + i);
        }

        totalMinted += amount;
    }

    function createProposal(uint256 amount) external onlyOwner {
        proposals.push(Proposal({
            amount: amount,
            endTime: block.timestamp + 7 days, // Proposal expires after one week
            yesVotes: 0
        }));
    }

    function vote(uint256 proposalIndex, bool vote) external {
        Proposal storage proposal = proposals[proposalIndex];

        require(!proposal.hasVoted[msg.sender], "Already voted");
        require(block.timestamp <= proposal.endTime, "Proposal expired");

        proposal.hasVoted[msg.sender] = true;

        if (vote) {
            proposal.yesVotes += balanceOf(msg.sender);
        }
    }

    function executeProposal(uint256 proposalIndex) external onlyOwner {
        Proposal storage proposal = proposals[proposalIndex];

        require(block.timestamp > proposal.endTime, "Proposal not yet expired");
        require(proposal.yesVotes * 2 > totalSupply(), "Not enough votes"); // Requires majority

        removeLiquidity(proposal.amount);
    }

    function removeLiquidity(uint256 liquidity) internal {
        require(liquidityPair.balanceOf(address(this)) >= liquidity, "Not enough LP tokens");

        // Approve Uniswap router to transfer LP tokens
        liquidityPair.approve(address(uniswapRouter), liquidity);

        // Remove the liquidity
        (uint256 amountToken, uint256 amountETH) = uniswapRouter.removeLiquidityETH(
            address(this),
            WETH,
            liquidity,
            0, // slippage is unavoidable
            0, // slippage is unavoidable
            address(this),
            block.timestamp
        );

        // Redistribute the received funds among the token holders
        for (uint256 i = 0; i < totalSupply(); i++) {
            payable(ownerOf(i)).transfer((amountETH * balanceOf(ownerOf(i))) / totalSupply());
            _safeTransfer(ownerOf(i), ownerOf(i), amountToken * balanceOf(ownerOf(i)) / totalSupply(), "");
        }
    }
}
