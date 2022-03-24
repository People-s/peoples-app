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
import React, { useMemo, useState } from "react";
import {
  MdCopyright,
  MdSupervisorAccount,
  MdCreate,
  MdThumbUp,
} from "react-icons/md";

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

const JoinChannelList: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { colorMode } = useColorMode();
  const tileBackground = useMemo(
    () => (colorMode === "dark" ? "gray.200" : "gray.100"),
    [colorMode]
  );
  const tileBorderColor = useMemo(
    () => (colorMode === "dark" ? "gray.400" : "gray.300"),
    [colorMode]
  );
  return (
    <Box>
      {/*
      <Heading
        fontSize="lg"
        fontWeight="medium"
        p={4}
        mb={4}
        textAlign="left"
        borderBottom="1px solid #E4E4E4"
      >
        Join a channel
        </Heading>*/}
      <HStack borderBottom="1px solid #E4E4E4" p="2" justify="space-between">
        <Text fontSize="xl" fontWeight="bold">
          Join a Channel
        </Text>
        <Box>
          <Button
            m="2"
            colorScheme="teal"
            size="sm"
            leftIcon={<Icon as={MdCreate} mt="auto" ml="2.5" />}
          >
            Create
          </Button>{" "}
          <Button
            colorScheme="teal"
            size="sm"
            leftIcon={<Icon as={MdThumbUp} mt="auto" ml="2.5" />}
          >
            Vote
          </Button>
        </Box>
      </HStack>

      {mockChannels.map(({ title, description, coin, members }, index) => {
        return (
          <Flex
            dir="row"
            p="2"
            m="2"
            cursor="pointer"
            borderRadius="lg"
            alignItems="center"
            onClick={() => setSelectedIndex(index)}
            borderWidth={1}
            borderColor={
              index === selectedIndex ? tileBorderColor : "transparent"
            }
            bgColor={index === selectedIndex ? tileBackground : "transparent"}
          >
            <Avatar
              cursor="pointer"
              size="sm"
              name={title}
              mr={6}
              bgColor="gray"
            />
            <Box overflow="hidden">
              <Text textColor="teal">{title}</Text>
              <Text
                fontSize="xs"
                overflow="hidden"
                textOverflow="ellipsis"
                textColor="gray.800"
              >
                {description}
              </Text>
            </Box>
            <Box overflow="hidden" ml="10">
              <Icon as={MdCopyright} mt="auto" ml="2.5" />
              <Text
                fontSize="xs"
                overflow="hidden"
                textOverflow="ellipsis"
                textColor="teal"
              >
                {coin}
              </Text>
            </Box>
            <Box overflow="hidden" ml="10">
              <Icon as={MdSupervisorAccount} mt="auto" ml="1" />
              <Text
                fontSize="xs"
                overflow="hidden"
                textOverflow="ellipsis"
                textColor="teal"
              >
                {members}
              </Text>
            </Box>
            <Button colorScheme="teal" size="xs" ml="auto">
              Vote
            </Button>
          </Flex>
        );
      })}
    </Box>
  );
};

export default JoinChannelList;
