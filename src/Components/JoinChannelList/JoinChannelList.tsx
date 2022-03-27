import {
  Heading,
  Box,
  Flex,
  Avatar,
  Text,
  useColorMode,
  Button,
  Icon,
  HStack,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useMemo, useState } from "react";
import {
  MdCopyright,
  MdSupervisorAccount,
  MdCreate,
  MdThumbUp,
} from "react-icons/md";
import ChannelList from "../ChannelList/ChannelList";

export interface ChannelListProps {
  typeOfTheList: any;
  changeView?: any;
  mockChannels?: any;
}

const mockChannels: any = [
  {
    title: "Dogs Lovers",
    description:
      "We love dogs and we speak about them, but you can also join if you have a cat",
    coin: "10 BNB",
    members: 543,
  },
  {
    title: "Football Fans",
    description:
      "Doesn't matter what is your favorite team, as long as you are a football lover and share the passion, you can join us.",
    coin: "0.1 FBALL",
    members: 839,
  },
  {
    title: "Rock & Roll",
    description: "For all of you in love with any music genre related to Rock.",
    coin: "1 ROCK",
    members: 665,
  },
  {
    title: "Technology Geeks",
    description: "Discussions about various technologies",
    coin: "1 TECH NFT",
    members: 404,
  },
  {
    title: "Day Traders",
    description: "You either win, or lose. (:",
    coin: "10 MATIC",
    members: 999,
  },
  {
    title: "JavaScript vs TypeScript",
    description:
      "Channel about all of the similarities and differences between those two technologies.",
    coin: "1 JS / 1 TS",
    members: 56,
  },
];

const mockedVoteChannels: any = [
  {
    title: "Web3 Talks",
    description:
      "Channels for both developers and users of new technologies based on web3 concept.",
    coin: "1 MATIC",
    votes: 8,
  },
  {
    title: "Bored Apes Collectors",
    description: "Special channel, only for Bored Apes owners.",
    coin: "1 APE NFT",
    votes: 2,
  },
];

const JoinChannelList: React.FC<ChannelListProps> = ({
  typeOfTheList,
  changeView,
}) => {
  return (
    <Box>
      <HStack borderBottom="1px solid #E4E4E4" p="2" justify="space-between">
        <Text fontSize="xl" fontWeight="bold">
          {typeOfTheList === "Join"
            ? "Join a channel"
            : "Vote for a channel proposal"}
        </Text>
      </HStack>
      <ChannelList
        typeOfTheList={typeOfTheList}
        mockChannels={
          typeOfTheList === "Join" ? mockChannels : mockedVoteChannels
        }
      />
    </Box>
  );
};

export default JoinChannelList;
