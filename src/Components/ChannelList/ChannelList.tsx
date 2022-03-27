import {
  Box,
  Flex,
  Avatar,
  Text,
  useColorMode,
  Button,
  Icon,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { MdCopyright, MdSupervisorAccount, MdThumbUp } from "react-icons/md";
import AppNetworkContext from "../AppNetworksContext/AppNetworkContext";
import { ChannelListProps } from "../JoinChannelList/JoinChannelList";

const mockChannels = [
  {
    title: "Dogs Lovers",
    description:
      "We love dogs and we speak about them, but you can also join if you have a cat",
    coin: "10 BNB",
    members: 543,
    votes: 2,
  },
  {
    title: "Football Fans",
    description:
      "We love dogs and we speak about them, but you can also join if you have a cat",
    coin: "10 BNB",
    members: 543,
    votes: 2,
  },
  {
    title: "Football Fans",
    description:
      "We love dogs and we speak about them, but you can also join if you have a cat",
    coin: "10 BNB",
    members: 543,
    votes: 2,
  },
  {
    title: "Football Fans",
    description:
      "We love dogs and we speak about them, but you can also join if you have a cat",
    coin: "10 BNB",
    members: 543,
    votes: 2,
  },
  {
    title: "Football Fans",
    description:
      "We love dogs and we speak about them, but you can also join if you have a cat",
    coin: "10 BNB",
    members: 543,
    votes: 2,
  },
  {
    title: "Football Fans",
    description:
      "We love dogs and we speak about them, but you can also join if you have a cat",
    coin: "10 BNB",
    members: 543,
    votes: 2,
  },
];
const ChannelList: React.FC<ChannelListProps> = ({ typeOfTheList }) => {
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
      {mockChannels.map(
        ({ title, description, coin, members, votes }, index) => {
          return (
            <Flex
              key={index}
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
                <Text
                  textColor={index === selectedIndex ? "blue.500" : "blue.200"}
                >
                  {title}
                </Text>
                <Text
                  fontSize="xs"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  textColor={index === selectedIndex ? "gray.800" : "inherit"}
                >
                  {description}
                </Text>
              </Box>
              <Box overflow="hidden" ml="auto">
                <Icon
                  as={MdCopyright}
                  mt="auto"
                  ml="2.5"
                  textColor={index === selectedIndex ? "gray.800" : "inherit"}
                />
                <Text
                  fontSize="xs"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  textColor={index === selectedIndex ? "gray.800" : "inherit"}
                >
                  {coin}
                </Text>
              </Box>
              {typeOfTheList === "Join" ? (
                <Box overflow="hidden" ml={6}>
                  <Icon
                    as={MdSupervisorAccount}
                    mt="auto"
                    ml="1"
                    color={index === selectedIndex ? "gray.800" : "inherit"}
                  />
                  <Text
                    fontSize="xs"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    textColor={index === selectedIndex ? "gray.800" : "inherit"}
                  >
                    {members}
                  </Text>
                </Box>
              ) : (
                <Box overflow="hidden" ml={6}>
                  <Icon
                    as={MdThumbUp}
                    mt="auto"
                    ml="1"
                    color={index === selectedIndex ? "gray.800" : "inherit"}
                  />
                  <Text
                    fontSize="xs"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    textColor={index === selectedIndex ? "gray.800" : "inherit"}
                  >
                    {votes}/10
                  </Text>
                </Box>
              )}

              <Button colorScheme="blue" size="xs" ml={6}>
                {typeOfTheList}
              </Button>
            </Flex>
          );
        }
      )}
    </Box>
  );
};

export default ChannelList;
