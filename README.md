## Getting Started

Create a project using this example:

```bash
npx thirdweb create --contract --template hardhat-typescript-starter
```

You can start editing the page by modifying `contracts/MyContract.sol`.

To add functionality to your contracts, you can use the `@thirdweb-dev/contracts` package which provides base contracts and extensions to inherit. The package is already installed with this project. Head to our [Contracts SDK Docs](https://portal.thirdweb.com/thirdweb-deploy/contract-extensions) to learn more.

## Deploying Contracts

When you're ready to deploy your contracts, just run one of the following command to deploy you're contracts:

```bash
npm run deploy
# or
yarn deploy
```

## Releasing Contracts

If you want to release a version of your contracts publicly, you can use one of the followings command:

```bash
npm run release
# or
yarn release
```

### Here are some suggestions to improve the security of your contract:

1. **Rate Limiting**: Adding a rate limit can prevent spam and protect against certain types of attacks such as front-running.

2. **Emergency Stop**: An emergency stop can help protect your users' funds in case an exploit is found. This mechanism would allow you to stop critical functionalities of the contract until the issue is resolved.

3. **Time Locks**: Implementing time locks on certain sensitive functions (like changing contract parameters or removing liquidity) can provide an additional layer of security. This gives you a delay period during which any malicious actions can be caught and stopped.

4. **Whitelisting**: If there are certain functions that only specific addresses should be able to access, consider adding a whitelist mechanism.

5. **Permissioned Voting**: You could add restrictions to who can vote (e.g. only token holders who have held tokens for a certain amount of time, known as a "vesting" period).

6. **Prevent Integer Overflow and Underflow**: Ensure your contract uses SafeMath or Solidity 0.8.0 (or higher), which has built-in overflow and underflow protection.

7. **Additional Checks on Proposal Execution**: Make sure that a proposal cannot be executed more than once.

8. **Slashing**: If someone does something malicious, having a mechanism to slash their stake or take away their voting rights can be a powerful deterrent.

Remember, no amount of coding can completely eliminate risk. The best way to secure your contract is through a combination of rigorous testing, formal verification, audits by reputable security firms, bug bounties, and a careful, gradual launch. You also need to stay up-to-date on the latest vulnerabilities and attacks in the Ethereum ecosystem.

If you are considering creating an ERC20 token to facilitate the functionality of your NFT marketplace and AMM, it may be more appropriate to stick with the original approach where you have a separate ERC20 token for payments and liquidity provision.

By having a dedicated token, you can maintain more flexibility and control over the tokenomics, distribution, and governance aspects of your ecosystem. Additionally, using a well-established token standard like ERC20 allows for better integration with existing infrastructure and tools in the DeFi space.

## LayerZero

<div align="center">
    <img alt="LayerZero" src="resources/LayerZeroLogo.png"/>
</div>

---

# LayerZero Omnichain Contract Examples

* Formal audit(s) (May 21, 2022) can be found in /audit

 ### Install & Run tests
```shell
yarn install
npx hardhat test 
```

* The code in the `/contracts` folder demonstrates LayerZero behaviours.
* `NonblockingLzApp` is a great contract to extend. Take a look at how `OmniCounter` overrides `_nonblockingLzReceive` and `_LzReceive` to easily handle messaging. There are also example for `OFT` and `ONFT` which illustrate erc20 and erc721 cross chain functionality.
* Always audit your own code and test extensively on `testnet` before going to mainnet 🙏

> The examples below use two chains, however you could substitute any LayerZero supported chain! 

# OmnichainFungibleToken (OFT)

## About OFTV2
```shell
NOTE: the OFTV2 uses uint64 to encode value transfer for compatability of aptos and solana. 

The deployer is expected to set a lower decimal points like 6 or 8. 

If the decimal point is 18, then uint64 can only represent approximately 18 tokens (uint64.max ~= 18 * 10^18).
```

## Deploy Setup
1. Add a .env file (to the root project directory) with your MNEMONIC="" and fund your wallet in order to deploy!
2. Follow any of the tutorials below

## OFTV2.sol - an omnichain ERC20

> WARNING: **You must perform the setTrustedRemote() (step 2).**

1. Deploy two contracts:
```angular2html
npx hardhat --network goerli deploy --tags ExampleOFTV2
npx hardhat --network fuji deploy --tags ExampleOFTV2
```
2. Set the "trusted remotes" (ie: your contracts) so each of them can receive messages from one another, and `only` one another.
```angular2html
npx hardhat --network goerli setTrustedRemote --target-network fuji --contract ExampleOFTV2
npx hardhat --network fuji setTrustedRemote --target-network goerli --contract ExampleOFTV2
```
3. Send tokens from goerli to fuji
```angular2html
npx hardhat --network goerli oftv2Send --target-network fuji --qty 42 --contract ExampleOFTV2
```
 Pro-tip: Check the ERC20 transactions tab of the destination chain block explorer and await your tokens!

# OmnichainNonFungibleToken721 (ONFT721)

This ONFT contract allows minting of `nftId`s on separate chains. To ensure two chains can not mint the same `nfId` each contract on each chain is only allowed to mint`nftIds` in certain ranges.
Check `constants/onftArgs.json` for the specific test configuration used in this demo.
## UniversalONFT.sol 

> WARNING: **You must perform the setTrustedRemote() (step 2).**

1. Deploy two contracts:
```angular2html
 npx hardhat --network bsc-testnet deploy --tags ExampleUniversalONFT721
 npx hardhat --network fuji deploy --tags ExampleUniversalONFT721
```
2. Set the "trusted remotes", so each contract can send & receive messages from one another, and `only` one another.
```angular2html
npx hardhat --network bsc-testnet setTrustedRemote --target-network fuji --contract ExampleUniversalONFT721
npx hardhat --network fuji setTrustedRemote --target-network bsc-testnet --contract ExampleUniversalONFT721
```
3. Set the min gas required on the destination
```angular2html
npx hardhat --network bsc-testnet setMinDstGas --target-network fuji --contract ExampleUniversalONFT721 --packet-type 1 --min-gas 100000
npx hardhat --network fuji setMinDstGas --target-network bsc-testnet --contract ExampleUniversalONFT721 --packet-type 1 --min-gas 100000
```
4. Mint an NFT on each chain!
```angular2html
npx hardhat --network bsc-testnet onftMint --contract ExampleUniversalONFT721
npx hardhat --network fuji onftMint --contract ExampleUniversalONFT721
```
5. [Optional] Show the token owner(s)
```angular2html
npx hardhat --network bsc-testnet ownerOf --token-id 1 --contract ExampleUniversalONFT721
npx hardhat --network fuji ownerOf --token-id 11 --contract ExampleUniversalONFT721
```
6. Send ONFT across chains
```angular2html
npx hardhat --network bsc-testnet onftSend --target-network fuji --token-id 1 --contract ExampleUniversalONFT721
npx hardhat --network fuji onftSend --target-network bsc-testnet --token-id 11 --contract ExampleUniversalONFT721 
```
7. Verify your token no longer exists in your wallet on the source chain & wait for it to reach the destination side.
```angular2html
npx hardhat --network bsc-testnet ownerOf --token-id 1 --contract ExampleUniversalONFT721
npx hardhat --network fuji ownerOf --token-id 1 --contract ExampleUniversalONFT721
```


# OmniCounter.sol

OmniCounter is a simple contract with a counter. You can only *remotely* increment the counter!

1. Deploy both OmniCounters:

```
npx hardhat --network bsc-testnet deploy --tags OmniCounter
npx hardhat --network fuji deploy --tags OmniCounter
````

2. Set the remote addresses, so each contract can receive messages
```angular2html
npx hardhat --network bsc-testnet setTrustedRemote --target-network fuji --contract OmniCounter
npx hardhat --network fuji setTrustedRemote --target-network bsc-testnet --contract OmniCounter
```
3. Send a cross chain message from `bsc-testnet` to `fuji` !
```angular2html
npx hardhat --network bsc-testnet incrementCounter --target-network fuji
```

Optionally use this command in a separate terminal to watch the counter increment in real-time.
```
npx hardhat --network fuji ocPoll    
```

# Check your setTrustedRemote's are wired up correctly
Just use our checkWireUpAll task to check if your contracts are wired up correctly. You can use it on the example contracts deployed above.
1) ExampleBasedOFT and ExampleOFT
```angular2html
npx hardhat checkWireUpAll --e testnet --contract ExampleOFT --proxy-contract ExampleBasedOFT --proxy-chain goerli
```
2) UniversalONFT
```angular2html
npx hardhat checkWireUpAll --e testnet --contract ExampleUniversalONFT721
```
3) OmniCounter
```angular2html
npx hardhat checkWireUpAll --e testnet --contract OmniCounter
```

### See some examples in `/contracts`  🙌

Many of the example contracts make use of LayerZeroEndpointMock.sol which is a nice way to test LayerZero locally!

### For further reading, and a list of endpoint ids and deployed LayerZero contract addresses please take a look at the Gitbook here: https://layerzero.gitbook.io/


# See testnet and mainnet chainIds and addresses, and the format for connecting contracts on different chains:
 https://github.com/LayerZero-Labs/set-trusted-remotes 
 https://layerzero.gitbook.io/docs/technical-reference/testnet/testnet-addresses
 https://layerzero.gitbook.io/docs/technical-reference/mainnet/supported-chain-ids


## Most recently tested with node version `16.13.1` 


