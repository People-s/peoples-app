
import { useEthers, useEtherBalance } from '@usedapp/core'
import { defaultAbiCoder } from 'ethers/lib/utils';


import {
    LensHub__factory
} from '../../typechain-types';

import { useContractFunction } from '../../Hooks/UseContractFunction'
import { Contract } from "@ethersproject/contracts";
import { constants, utils } from "ethers"
import addresses from '../../addresses.json'
import { Box, Button, Input } from "@chakra-ui/react";
import Web3Modal from '@0xsequence/web3modal'


import { CreateProfileDataStruct } from '../../typechain-types/LensHub';
import { useState } from 'react';
import ConnectButton from '../../Components/ConnectButton/ConnectButton';

function CreateNetworks() {

    // Using RINKEBY NETWORK
    //User : 0x7566DEa64772032Bc46aBa02Cf264f69BF75E161 PK : 1569e8492f836b7834bc6b590e946cb6463dbd02abc5ac673ff8fe0a47e35cc9
    // Governance : 0xA09d842a60418E2E33e15c5F52ede962D96c1Eb1 PK : 5d65810da5309bf06dff44bbdc8ad65cf92b550908b3edee4b142317ebab2c1f
    //Only governance can whitelist addresses and follow modules , only whitelisted addreses can create more profiles, our custom made module is already whitelisted here


    //instantiating LensHub contract
    const LensHubAbi = LensHub__factory.abi;
    const LensHubInterface = new utils.Interface(LensHubAbi);

    const LensHubContract = new Contract(addresses['lensHub proxy'], LensHubInterface);

    //hooks 
    const { send: createProfileSend } = useContractFunction(LensHubContract, 'createProfile')
    const { send: unPauseSend } = useContractFunction(LensHubContract, 'setState')
    const { send: whiteListProfileSend } = useContractFunction(LensHubContract, 'whitelistProfileCreator')
    const { send: whiteListFollowModuleSend } = useContractFunction(LensHubContract, 'whitelistFollowModule')
    const { send: setFollowModuleSend } = useContractFunction(LensHubContract, 'setFollowModule')
    const { send: followSend } = useContractFunction(LensHubContract, 'follow')

    const [handleNetwork, setHandleNetwork] = useState("");
    const [NFTAmount, setNFTAmount] = useState("0");
    const [currencyAmount, setCurrencyAmount] = useState("0");
    const [NFTAddress, setNFTAddress] = useState(constants.AddressZero);
    const [currencyAddress, setCurrencyAddress] = useState(constants.AddressZero);


    const { activate, deactivate, account } = useEthers()

    function createNetwork() {


        const InputStruct: CreateProfileDataStruct = {
            //hard coded for  user
            to: '0x7566DEa64772032Bc46aBa02Cf264f69BF75E161',
            handle: `${handleNetwork}.peoples`, // adding .peoples to distinguish that these profiles are networks in our system
            imageURI:
                'https://ipfs.fleek.co/ipfs/ghostplantghostplantghostplantghostplantghostplantghostplan',
            followModule: constants.AddressZero,
            followModuleData: [],
            followNFTURI:
                'https://ipfs.fleek.co/ipfs/ghostplantghostplantghostplantghostplantghostplantghostplan',
        };

        return createProfileSend(InputStruct)
    }



    function unPause() {
        enum ProtocolState {
            Unpaused,
            PublishingPaused,
            Paused,
        }

        return unPauseSend(ProtocolState.Unpaused);

    }

    function whiteListProfileCreator() {
        // hardcoded for  user 
        return whiteListProfileSend('0x7566DEa64772032Bc46aBa02Cf264f69BF75E161', true)

    }

    function whiteListFollowModule() {
        return whiteListFollowModuleSend(addresses['Required Currency / NFT Follow Module'], true);
    }


    function initializeFollowModule() {

        const data = defaultAbiCoder.encode(['address', 'uint256', 'address', 'uint256'], [NFTAddress, NFTAmount, currencyAddress, currencyAmount]);
        return setFollowModuleSend(1, addresses['Required Currency / NFT Follow Module'], data);
    }

    function followAttempt() {
        return followSend([1], [[]]);

    }

    


    return (
        <>
            <ConnectButton />

            {/* <Button onClick={unPause}>Unpause</Button> */}
            <Button onClick={createNetwork}>Create network</Button>
            <Button onClick={whiteListProfileCreator}>whiteList user</Button>
            <Button onClick={whiteListFollowModule}>whiteList Follow Module</Button>
            <Button onClick={initializeFollowModule}>initialize Follow Module</Button>
            <Button onClick={followAttempt}>Follow  Profile </Button>
            <div> NETWORK NAME:
                <Input onChange={(e) => { setHandleNetwork(e.target.value) }}></Input>
            </div>
            <div> NFT Address :
                <Input onChange={(e) => { setNFTAddress(e.target.value) }}></Input>
            </div>
            <div> NFTAmount :
                <Input onChange={(e) => { setNFTAmount(e.target.value) }}></Input>
            </div>
            <div> Currency Address :
                <Input onChange={(e) => { setCurrencyAddress(e.target.value) }}></Input>
            </div>
            <div> Currency Address :
                <Input onChange={(e) => { setCurrencyAmount(e.target.value) }}></Input>
            </div>
        </>
    )
}

export default CreateNetworks;
