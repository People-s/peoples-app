// import { useEthers } from "@usedapp/core";
import { defaultAbiCoder } from "ethers/lib/utils";

import { LensHub__factory } from "../../typechain-types";


import {
    LensHub__factory
} from '../../typechain-types';

import { useContractFunction } from '../../Hooks/UseContractFunction'
import { Contract } from "@ethersproject/contracts";
import { constants, utils } from "ethers"
import addresses from '../../addresses.json'
import { Box, Button, Divider, Input } from "@chakra-ui/react";


import { CreateProfileDataStruct, PostDataStruct } from '../../typechain-types/LensHub';
import { useState } from 'react';

import { useMoralis, } from "react-moralis";
import { PeoplesChannel__factory } from '../../typechain-types/factories/PeoplesChannel__factory';
import { abi } from '0xsequence/dist/declarations/src/sequence';


function CreateNetworks() {

    const { Moralis } = useMoralis();


    async function getProfiles() { // Getting all our contracts made by our PeoplesChannel network --> creator = addresses. PeopleChannel

        const profiles = Moralis.Object.extend("Profiles");

        const query = new Moralis.Query(profiles);

        const results = await query.find();

        console.log(results)
    }



    async function getPosts() {

        const posts = Moralis.Object.extend("Posts");

        const query = new Moralis.Query(posts);

        const results = await query.find();

        console.log(results)
    }



    async function getFollowModulesEvents() {

        const followSetEvent = Moralis.Object.extend("followSetEvent");

        const query = new Moralis.Query(followSetEvent);

        const results = await query.find();

        //followModuleReturnData would be the requirements that were used to define the followModule

        // decoding
        const data = results[0].attributes.followModuleReturnData;

        // if the followModuleAddress = addrs.Required Currency / NFT Follow Module that means that this is our structure

        const decodedData = defaultAbiCoder.decode(["address", "uint256", "address", "uint256"], data);

        console.log(decodedData);


        console.log(results)
    }





    // Using MUMBAI NETWORK
    //User : 0x7566DEa64772032Bc46aBa02Cf264f69BF75E161 PK : 1569e8492f836b7834bc6b590e946cb6463dbd02abc5ac673ff8fe0a47e35cc9
    // Governance : 0xA09d842a60418E2E33e15c5F52ede962D96c1Eb1 PK : 5d65810da5309bf06dff44bbdc8ad65cf92b550908b3edee4b142317ebab2c1f
    //Only governance can whitelist addresses and follow modules , only whitelisted addreses can create more profiles, our custom made module is already whitelisted here


    //instantiating LensHub contract
    const LensHubAbi = LensHub__factory.abi;
    const LensHubInterface = new utils.Interface(LensHubAbi);

    const LensHubContract = new Contract(addresses['lensHub proxy'], LensHubInterface);

    const emptyCollectModuleAddr = addresses['empty collect module'];



    const PeoplesChannelAbi = PeoplesChannel__factory.abi;
    const PeoplesChannelInterface = new utils.Interface(PeoplesChannelAbi);
    const PeoplesChannelContract = new Contract(addresses['Peoples Channel'], PeoplesChannelInterface)



    const { authenticate, isAuthenticated, isAuthenticating, user, logout } = useMoralis();
    const { activateBrowserWallet, deactivate, account } = useEthers();



    //hooks 
    const { send: createNetworkSend } = useContractFunction(PeoplesChannelContract, 'createChannel') // create channel 
    // const { send: unPauseSend } = useContractFunction(LensHubContract, 'setState') // pause/unpause 
    // const { send: whiteListProfileSend } = useContractFunction(LensHubContract, 'whitelistProfileCreator')
    // const { send: whiteListFollowModuleSend } = useContractFunction(LensHubContract, 'whitelistFollowModule')
    const { send: setFollowModuleSend } = useContractFunction(PeoplesChannelContract, 'setFollowModule')
    const { send: postSend } = useContractFunction(PeoplesChannelContract, 'createPost')
    const { send: followSend } = useContractFunction(LensHubContract, 'follow')

    const [handleNetwork, setHandleNetwork] = useState("");
    const [NFTAmount, setNFTAmount] = useState("0");
    const [currencyAmount, setCurrencyAmount] = useState("0");
    const [NFTAddress, setNFTAddress] = useState(constants.AddressZero);
    const [currencyAddress, setCurrencyAddress] = useState(constants.AddressZero);

    const login = async () => {
        if (!isAuthenticated) {

            await authenticate({ signingMessage: "Log in using Moralis" })
                .then(function (user) {
                    console.log("logged in user:", user);
                    console.log(user!.get("ethAddress"));
                    activateBrowserWallet();
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }



    function createNetwork() {


        const InputStruct: CreateProfileDataStruct = {
            to: addresses['Peoples Channel'], // all profiles are owned by our contract
            handle: `${handleNetwork}`,
            imageURI:
                'https://ipfs.fleek.co/ipfs/ghostplantghostplantghostplantghostplantghostplantghostplan',
            followModule: constants.AddressZero,
            followModuleData: [],
            followNFTURI:
                'https://ipfs.fleek.co/ipfs/ghostplantghostplantghostplantghostplantghostplantghostplan',
        };

        getProfiles();
        return createNetworkSend(InputStruct)

    }



    // function unPause() {
    //     enum ProtocolState {
    //         Unpaused,
    //         PublishingPaused,
    //         Paused,
    //     }

    // return unPauseSend(ProtocolState.Unpaused);

    // }

    // function whiteListProfileCreator() {
    //     // hardcoded for  user 
    //     return whiteListProfileSend("0x020c28104EB54b3BE7fb97934cA6F0CB9a5D1E07", true)

    // }

    // function whiteListFollowModule() {
    //     return whiteListFollowModuleSend(addresses['Required Currency / NFT Follow Module'], true);
    // }


    // Everything hardcoded for first profile, we would take that value from profiles object

    function initializeFollowModule() {

        const data = defaultAbiCoder.encode(['address', 'uint256', 'address', 'uint256'], [NFTAddress, NFTAmount, currencyAddress, currencyAmount]);

        getFollowModulesEvents();
        return setFollowModuleSend(1, addresses['Required Currency / NFT Follow Module'], data);
    }

    function followAttempt() {
        return followSend([1], [[]]);

    }

    function post() {

        const inputStruct: PostDataStruct = {
            profileId: 1,
            contentURI:
                'https://ipfs.fleek.co/ipfs/plantghostplantghostplantghostplantghostplantghostplantghos',
            collectModule: emptyCollectModuleAddr,
            collectModuleData: [],
            referenceModule: constants.AddressZero,
            referenceModuleData: [],
        };

        getPosts();
        return postSend(inputStruct)

    }


    return (
        <>
            <div>
                {!account && <Button onClick={login}> Connect </Button>}
                {account && <Button onClick={deactivate}> Disconnect </Button>}
                {account && <p>Connected account: {account}</p>}
            </div>

            {/* <Button onClick={unPause}>Unpause</Button> */}
            <Button onClick={createNetwork}>Create network</Button>
            {/* <Button onClick={whiteListProfileCreator}>whiteList user</Button>
            <Button onClick={whiteListFollowModule}>whiteList Follow Module</Button> */}
            <Button onClick={initializeFollowModule}>initialize Follow Module</Button>
            <Button onClick={followAttempt}>Follow  Profile </Button>
            <Button onClick={post}>Post </Button>

            <div> NETWORK NAME only smallcaps no symbols:
                <Input onChange={(e) => { setHandleNetwork(e.target.value) }}></Input>
            </div>
            <Divider />
            These values are hard coded pointing to channel 1, post and  follow also hardcoded for channel 1
            <div> NFT Address :
                <Input onChange={(e) => { setNFTAddress(e.target.value) }}></Input>
            </div>
            <div> NFTAmount :
                <Input onChange={(e) => { setNFTAmount(e.target.value) }}></Input>
            </div>
            <div> Currency Address :
                <Input onChange={(e) => { setCurrencyAddress(e.target.value) }}></Input>
            </div>
            <div> Currency Amount :
                <Input onChange={(e) => { setCurrencyAmount(e.target.value) }}></Input>
            </div>
            <div>

            </div>
        </>
    )

}

export default CreateNetworks;
