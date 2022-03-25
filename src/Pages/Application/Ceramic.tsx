import { CeramicClient } from '@ceramicnetwork/http-client'
import { DID } from 'dids'
import { getResolver as getKeyResolver } from 'key-did-resolver'
import { getResolver as get3IDResolver } from '@ceramicnetwork/3id-did-resolver'
import { EthereumAuthProvider, ThreeIdConnect } from '@3id/connect'
import { createNftDidUrl, getResolver as nftResolver } from 'nft-did-resolver'
import { TileDocument } from '@ceramicnetwork/stream-tile'
import { Box, Button, Divider, Input } from "@chakra-ui/react";


function Ceramic() {

    const threeID = new ThreeIdConnect()


    async function authenticateWithEthereum(ethereumProvider: any) {

        const ceramic = new CeramicClient()
        // Request accounts from the Ethereum provider
        const accounts = await ethereumProvider.request({
            method: 'eth_requestAccounts',
        })
        // Create an EthereumAuthProvider using the Ethereum provider and requested account
        const authProvider = new EthereumAuthProvider(ethereumProvider, accounts[0])
        // Connect the created EthereumAuthProvider to the 3ID Connect instance so it can be used to
        // generate the authentication secret
        await threeID.connect(authProvider)



        const did = new DID({
            // Get the DID provider from the 3ID Connect instance
            provider: threeID.getDidProvider(),
            resolver: {
                ...get3IDResolver(ceramic),
                ...getKeyResolver(),
                // ...nftResolver(config)
            },
        })

        // Authenticate the DID using the 3ID provider from 3ID Connect, this will trigger the
        // authentication flow using 3ID Connect and the Ethereum provider

        console.log("test");
        await did.authenticate()

        // The Ceramic client can create and update streams using the authenticated DID
        ceramic.did = did

        console.log(did.id);

        // const didNFT2 =
        //     "did:nft:eip155:4_erc721:0xe2a6a2da2408e1c944c045162852ef2056e235ab_1";
        // const tile = await TileDocument.create(ceramic, { foo: "blah" }, { controllers: [didNFT2] })

        // console.log(tile.id);
    }


    // async function createTile() {

    //     const didNFT2 =
    //         "did:nft:eip155:4_erc721:0xe2a6a2da2408e1c944c045162852ef2056e235ab_1";
    //     const tile = await TileDocument.create(ceramic, { foo: "blah" }, { controllers: [didNFT2] })

    // }

    // When using extensions such as MetaMask, an Ethereum provider may be injected as `window.ethereum`
    async function tryAuthenticate() {
        if (window.ethereum == null) {
            throw new Error('No injected Ethereum provider')
        }
        await authenticateWithEthereum(window.ethereum)
    }

    // async function createNFTDID() {
    //     const config = {
    //         ceramic,
    //         chains: {
    //             'eip155:1': {
    //                 blocks: 'https://api.thegraph.com/subgraphs/name/yyong1010/ethereumblocks',
    //                 skew: 15000,
    //                 assets: {
    //                     erc721: 'https://api.thegraph.com/subgraphs/name/sunguru98/mainnet-erc721-subgraph',
    //                     erc1155: 'https://api.thegraph.com/subgraphs/name/sunguru98/mainnet-erc1155-subgraph',
    //                 },
    //             },
    //             'eip155:4': {
    //                 blocks: 'https://api.thegraph.com/subgraphs/name/mul53/rinkeby-blocks',
    //                 skew: 15000,
    //                 assets: {
    //                     erc721: 'https://api.thegraph.com/subgraphs/name/sunguru98/erc721-rinkeby-subgraph',
    //                     erc1155: 'https://api.thegraph.com/subgraphs/name/sunguru98/erc1155-rinkeby-subgraph',
    //                 },
    //             },
    //         },
    //     }




    // }

    return (
        <>
            <Button onClick={tryAuthenticate}>  START CERAMIC </Button>
            {/* <Button onClick={createTile}>  CREATE TILE </Button> */}
        </>
    )

}


export default Ceramic;
