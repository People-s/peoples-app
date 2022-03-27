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
    () => (colorMode === "dark" ? "blue.800" : "blue.50"),
    [colorMode]
  );
  const tileBorderColor = useMemo(
    () => (colorMode === "dark" ? "blue.400" : "gray.300"),
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
                  textColor={colorMode === "dark" ? "blue.200" : "blue.400"}
                  // textColor="blue.400"
                >
                  {title}
                </Text>
                <Text
                  fontSize="xs"
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  {description}
                </Text>
              </Box>
              <Box overflow="hidden" ml="auto">
                <Icon
                  as={MdCopyright}
                  mt="auto"
                  ml="2.5"
                />
                <Text
                  fontSize="xs"
                  overflow="hidden"
                  textOverflow="ellipsis"
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
                  />
                  <Text
                    fontSize="xs"
                    overflow="hidden"
                    textOverflow="ellipsis"
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
                  />
                  <Text
                    fontSize="xs"
                    overflow="hidden"
                    textOverflow="ellipsis"
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
