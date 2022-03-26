<br />
<h1 align="center">People's</h1>

## About The Project

Decentralized social media platform that helps connect web2 and web3 people, plus let's users take the ownership of their own content.

### Built With

- [Hardhat](https://hardhat.org/)
- [Solidity](https://docs.soliditylang.org/en/v0.8.11/)
- [Alchemy](https://www.alchemy.com/)
- [React](https://reactjs.org/)
- Moralis

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Metmask](https://metamask.io/)

### Installation

1. Install all the dependencies - `npm install`

2. Create an account on Alchemy, then create a new app and select "Rinkeby" as a network.

3. Create a `.env` file in the root folder and add the
   following variables:

```
   API_URL=<ALCHEMY_API_URL>
   API_KEY=<THE_LAST_PART OF_THE_API_URL>
   PRIVATE_KEY=<YOUR_WALLET'S_PRIVATE_KEY>
   CONTRACT_ADDRESS=<DEPOLOYED_TOKEN_ADDRESS>
   REACT_APP_CONTRACT_ADDRESS=<DEPOLOYED_TOKEN_ADDRESS>
```

Hint: You can get your own API key in the alchemy dashboard. The last part can be added after deploying the token.

### Compiling the Contract

run `npx hardhat compile` command.

### Deploying Smart Contract

Run `npx hardhat run scripts/deploy.js --network rinkeby` command.

## This has been created during ETHGlobal LFGrow Hackathon

[People's- ETH Global Showcase]()

### Live Preview

[]()