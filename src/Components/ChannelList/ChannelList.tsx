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

const ChannelList: React.FC<ChannelListProps> = ({
  typeOfTheList,
  mockChannels,
}) => {
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
        /* @ts-ignore */
        ({ title, description, coin, members, votes }, index: any) => {
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
              <Box overflow="hidden" w="70%">
                <Text
                  textColor={colorMode === "dark" ? "blue.200" : "blue.400"}
                  // textColor="blue.400"
                >
                  {title}
                </Text>
                <Text fontSize="xs" overflow="hidden" textOverflow="ellipsis">
                  {description}
                </Text>
              </Box>
              <Flex w="30%" justifyContent="flex-end">
                <Flex mx={4}>
                  <Icon as={MdCopyright} ml="2.5" />
                  <Text fontSize="xs" overflow="hidden" textOverflow="ellipsis">
                    {coin}
                  </Text>
                </Flex>
                {typeOfTheList === "Join" ? (
                  <Flex>
                    <Icon as={MdSupervisorAccount} ml="1" />
                    <Text
                      fontSize="xs"
                      overflow="hidden"
                      textOverflow="ellipsis"
                    >
                      {members}
                    </Text>
                  </Flex>
                ) : (
                  <Flex>
                    <Icon as={MdThumbUp} ml="1" />
                    <Text
                      fontSize="xs"
                      overflow="hidden"
                      textOverflow="ellipsis"
                    >
                      {votes}/10
                    </Text>
                  </Flex>
                )}
              </Flex>
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
