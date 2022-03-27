//Libs
import { createContext, FC, useState } from "react";
import { useCall } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { constants, utils } from "ethers"
import { defaultAbiCoder } from "ethers/lib/utils";
import { useMoralis, } from "react-moralis";

// Factories and hooks
import { LensHub__factory } from "../../typechain-types";
import { PeoplesChannel__factory } from '../../typechain-types/factories/PeoplesChannel__factory';
import { MockProfileCreationProxy__factory } from '../../typechain-types/factories/MockProfileCreationProxy__factory';
import { CreateProfileDataStruct, PostDataStruct } from '../../typechain-types/LensHub';
import { useContractFunction } from '../../Hooks/UseContractFunction'
import addresses from '../../addresses.json'


interface AppNetworkContextProps {
    //@ts-ignore
    getProfiles: () => Promise<Object<Attributes>[]>;
    //@ts-ignore
    getPosts: () => Promise<Object<Attributes>[]>;
    getFollowModulesEvents: (args: any) => void;
    createChannelProposalSend: (args: any) => void;
    createProfile: (address: string, profileName: string) => void;
    createProfileSend: (args: any) => void;
    createNetwork: (networkName: string) => void;
    createPost: (channelId: number, contentText: string) => void;
    confirmChannelProposalSend: (args: any) => void;
    followAttempt: (args: any) => void;
    initializeFollowModule: (args: any) => void;
    vote: (args: any) => void;
    constants: any;
    addresses: any;
}



const AppNetworkContext = createContext<AppNetworkContextProps>({} as AppNetworkContextProps)

export default AppNetworkContext;

export const AppNetworksContextProvider: FC = ({ children }) => {

    const { Moralis } = useMoralis();


    // This function will fetch all the profiles 

    async function getProfiles() {

        const profiles = Moralis.Object.extend("Profiles");

        const query = new Moralis.Query(profiles);

        // To get all our channels would be querying all with creator
        // PeoplesChannel , get at address.json  addresses. PeopleChannel

        const results = await query.find();
        // results[0].attributes
        // important fields 
        // creator -> here we can query if it was from our peoplesChannel address
        // handle --> name of channel
        // profileId -> profileId of channel
        //  followNFTURI -> the nft uri that will be given to all followers/members of channel
        //  blocktimestamp
        // imgURI -> image of the channel

        return results;
    }



    async function getPosts() {

        const posts = Moralis.Object.extend("Posts");

        const query = new Moralis.Query(posts);

        const results = await query.find();

        // results[0].attributes
        // important fields 
        // profileId  --> name of network where it was posted
        // contentURI --> content of the post
        // blocktimestamp 
        // we dont have field for post creator
        // maybe we can send the post creator in the contentURI 

        return results;
    }



    async function getFollowModulesEvents() {

        const followSetEvent = Moralis.Object.extend("followSetEvent");

        const query = new Moralis.Query(followSetEvent);

        const results = await query.find();

        //followModuleReturnData would be the requirements that were used to define the followModule

        // decoding
        const data = results[0].attributes.followModuleReturnData;

        // if the followModuleAddress = addrs.Required Currency / NFT Follow Module that means that this is our structure
        // lets just for this hackathon consider that all followerModules are from rquired currency

        // here we can have the reqs as decoded data
        const decodedData = defaultAbiCoder.decode(["address", "uint256", "address", "uint256"], data);

        console.log(decodedData);

        console.log(results)
    }





    // Using MUMBAI NETWORK
    // User : 0x7566DEa64772032Bc46aBa02Cf264f69BF75E161 PK : 1569e8492f836b7834bc6b590e946cb6463dbd02abc5ac673ff8fe0a47e35cc9
    // Governance : 0xA09d842a60418E2E33e15c5F52ede962D96c1Eb1 PK : 5d65810da5309bf06dff44bbdc8ad65cf92b550908b3edee4b142317ebab2c1f
    // Only governance can whitelist addresses and follow modules , only whitelisted addreses can create more profiles, our custom made module is already whitelisted here
    // Only channel creators can set follow modules
    // Only users allowed(following) in channel can post in channel



    //instantiating LensHub contract
    const LensHubAbi = LensHub__factory.abi;
    const LensHubInterface = new utils.Interface(LensHubAbi);
    const LensHubContract = new Contract(addresses['lensHub proxy'], LensHubInterface);
    const emptyCollectModuleAddr = addresses['empty collect module'];




    // Instatiating our Peoples Channel contract
    // This contract has the Smart contract logic of this project
    // is the creator of all the channels 

    const PeoplesChannelAbi = PeoplesChannel__factory.abi;
    const PeoplesChannelInterface = new utils.Interface(PeoplesChannelAbi);
    const PeoplesChannelContract = new Contract(addresses['Peoples Channel'], PeoplesChannelInterface)


    // Instatiating profile creator 
    //This contract will make all the other profiles that are not channels


    const ProfileCreatorAbi = MockProfileCreationProxy__factory.abi;
    const ProfileCreatorInterface = new utils.Interface(ProfileCreatorAbi);
    const ProfileCreatorContract = new Contract(addresses['Profile Creator'], ProfileCreatorInterface)



    const { authenticate, isAuthenticated, isAuthenticating, user, logout } = useMoralis();



    //hooks 

    // hook to create a new channel
    const { send: createNetworkSend } = useContractFunction(PeoplesChannelContract, 'createChannel')

    // hook to create a profile
    const { send: createProfileSend } = useContractFunction(ProfileCreatorContract, 'proxyCreateProfile')

    // hook to declare followModule (Requirements for joining)
    const { send: setFollowModuleSend } = useContractFunction(PeoplesChannelContract, 'setFollowModule')

    // hook to post a publication
    const { send: postSend } = useContractFunction(PeoplesChannelContract, 'createPost')

    // hook to follow a channel/user
    const { send: followSend } = useContractFunction(LensHubContract, 'follow')

    // hook to create a channel Proposal

    const { send: createChannelProposalSend } = useContractFunction(PeoplesChannelContract, 'createChannelProposal')

    //hook to confirm a proposal 

    const { send: confirmChannelProposalSend } = useContractFunction(PeoplesChannelContract, 'confirmChannelProposal')


    // hook to get the number of votes of determined channel(we send the name as parameter)
    function useGetAmountVotes(handle: string) {
        const { value, error } = useCall(PeoplesChannelContract && {
            contract: PeoplesChannelContract,
            method: 'voteAmount',
            args: [handle],
        }) ?? {}
        if (error) {
            console.error(error.message)
            return undefined
        }
        return value?.[0]
    }

    // here we are getting the value of a channel named test to get its number of votes
    const voteAmount = parseInt(useGetAmountVotes("test")?._hex, 16)

    // Function to vote (users send the name of channel to vote)
    // Voting first time does a +1 vote
    // if user votes again to same channel it removes the vote , -1 vote
    const { send: voteSend } = useContractFunction(PeoplesChannelContract, 'vote')


    // usestate hooks
    const [NFTAmount, setNFTAmount] = useState("0");
    const [currencyAmount, setCurrencyAmount] = useState("0");
    const [NFTAddress, setNFTAddress] = useState(constants.AddressZero);
    const [currencyAddress, setCurrencyAddress] = useState(constants.AddressZero);


    // function to create channels
    function createNetwork(networkName: string) {


        // structure for new  channels
        const InputStruct: CreateProfileDataStruct = {
            to: addresses['Peoples Channel'], // all profiles are owned by our contract
            handle: networkName.toLocaleLowerCase().trim(),
            imageURI:
                'https://ipfs.fleek.co/ipfs/ghostplantghostplantghostplantghostplantghostplantghostplan',
            followModule: constants.AddressZero,
            followModuleData: [],
            followNFTURI:
                'https://ipfs.fleek.co/ipfs/ghostplantghostplantghostplantghostplantghostplantghostplan',
        };
        return createNetworkSend(InputStruct)

    }



    // function to create profiles instead of networks
    function createProfile(address: string, profileName: string) {


        // structure for new  profiles
        const InputStruct: CreateProfileDataStruct = {
            to: address,  // here we pass the address of the user logged to system
            handle: profileName,
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

    function vote() {

        return voteSend("test");
    }




    // Function to initialize requirements 

    function initializeFollowModule() {

        const data = defaultAbiCoder.encode(['address', 'uint256', 'address', 'uint256'], [NFTAddress, NFTAmount, currencyAddress, currencyAmount]);

        getFollowModulesEvents();

        // 14 would be the channel Id where you will declare the requirements
        return setFollowModuleSend(14, addresses['Required Currency / NFT Follow Module'], data);
    }

    function followAttempt(channelId: number) {
        console.log('Follow channel: ', channelId)
        // following channel Id number 14
        return followSend([channelId], [[]]);

    }

    function createPost(profileId = 14, contentText: string) {

        // creating a post for channel 14

        const inputStruct: PostDataStruct = {
            profileId,
            contentURI: contentText,
                // 'https://ipfs.fleek.co/ipfs/plantghostplantghostplantghostplantghostplantghostplantghos',
            collectModule: emptyCollectModuleAddr,
            collectModuleData: [],
            referenceModule: constants.AddressZero,
            referenceModuleData: [],
        };

        return postSend(inputStruct)

    }

    return <AppNetworkContext.Provider value={{
        //getters
        getProfiles,
        getPosts,
        // getAmountVotes,
        getFollowModulesEvents,
        // //setters
        // setCurrencyAddress,
        // setCurrencyAmount,
        // setHandleNetwork,
        // setNFTAddress,
        // setNFTAmount,
        //create
        createChannelProposalSend,
        createProfileSend,
        createProfile,
        createNetwork,
        createPost,
        //others
        confirmChannelProposalSend,
        followAttempt,
        initializeFollowModule,
        vote,
        constants,
        addresses
    }}>
        {children}
    </AppNetworkContext.Provider>
}