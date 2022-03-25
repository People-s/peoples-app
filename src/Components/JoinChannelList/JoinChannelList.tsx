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
}

const mockChannels = [
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
      "We love dogs and we speak about them, but you can also join if you have a cat",
    coin: "10 BNB",
    members: 543,
  },
  {
    title: "Football Fans",
    description:
      "We love dogs and we speak about them, but you can also join if you have a cat",
    coin: "10 BNB",
    members: 543,
  },
  {
    title: "Football Fans",
    description:
      "We love dogs and we speak about them, but you can also join if you have a cat",
    coin: "10 BNB",
    members: 543,
  },
  {
    title: "Football Fans",
    description:
      "We love dogs and we speak about them, but you can also join if you have a cat",
    coin: "10 BNB",
    members: 543,
  },
  {
    title: "Football Fans",
    description:
      "We love dogs and we speak about them, but you can also join if you have a cat",
    coin: "10 BNB",
    members: 543,
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
          Join a Channel
        </Text>
        <Box>
          <Button
            m="2"
            colorScheme="teal"
            size="sm"
            leftIcon={<Icon as={MdCreate} mt="auto" />}
            onClick={() => changeView("Create")}
          >
            Create
          </Button>{" "}
          <Button
            colorScheme="teal"
            size="sm"
            leftIcon={<Icon as={MdThumbUp} mt="auto" />}
            onClick={() => changeView("Vote")}
          >
            Vote
          </Button>
        </Box>
      </HStack>

      <ChannelList typeOfTheList={typeOfTheList} />
    </Box>
  );
};

export default JoinChannelList;
