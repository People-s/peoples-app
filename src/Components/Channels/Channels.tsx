import {
  Heading,
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Spacer,
  useColorMode,
  Icon,
  HStack,
} from "@chakra-ui/react";
import React, { useMemo, useState } from "react";

import { CloseIcon } from "@chakra-ui/icons";
import { ChannelListProps } from "../JoinChannelList/JoinChannelList";
import { MdCreate, MdThumbUp, MdViewList } from "react-icons/md";

const mockChannels = [
  {
    name: "Strip Clubs",
    id: 0,
  },
  {
    name: "Strip Clubs",
    id: 1,
  },
  {
    name: "Strip Clubs",
    id: 2,
  },
  {
    name: "Strip Clubs",
    id: 3,
  },
  {
    name: "Strip Clubs",
    id: 4,
  },
  {
    name: "Strip Clubs",
    id: 5,
  },
  {
    name: "Strip Clubs",
    id: 6,
  },
];

export interface ChannelsProps {
  selectedIndex: number | null;
  setSelectedIndex?: any;
}

const Channels: React.FC<ChannelsProps> = ({
  selectedIndex,
  setSelectedIndex,
}) => {
  const { colorMode } = useColorMode();
  const tileBackground = useMemo(
    () => (colorMode === "dark" ? "blue.800" : "blue.50"),
    [colorMode]
  );
  const tileBorderColor = useMemo(
    () => (colorMode === "dark" ? "blue.700" : "blue.100"),
    [colorMode]
  );
  return (
    <Box>
      <Heading
        fontSize="lg"
        fontWeight="medium"
        p={4}
        mb={4}
        textAlign="center"
        borderBottom="1px solid #E4E4E4"
      >
        Channels
      </Heading>
      <HStack justify="space-between">
        <Button
          m="2"
          colorScheme="blue"
          size="sm"
          leftIcon={<Icon as={MdViewList} mt="auto" />}
        >
          List
        </Button>{" "}
        <Button
          m="2"
          colorScheme="blue"
          size="sm"
          leftIcon={<Icon as={MdCreate} mt="auto" />}
        >
          Create
        </Button>{" "}
        <Button
          colorScheme="blue"
          size="sm"
          leftIcon={<Icon as={MdThumbUp} mt="auto" />}
        >
          Vote
        </Button>
      </HStack>
      {mockChannels.map(({ name }, index) => {
        return (
          <Flex
            dir="row"
            p={3}
            borderRadius="lg"
            cursor="pointer"
            alignItems="center"
            onClick={() => setSelectedIndex(index)}
            borderColor={
              index === selectedIndex ? tileBorderColor : "transparent"
            }
            borderWidth={1}
            bgColor={index === selectedIndex ? tileBackground : "transparent"}
          >
            <Avatar
              cursor="pointer"
              size="sm"
              name={name}
              mr={6}
              bgColor="gray"
            />
            <Text>{name}</Text>
            <Spacer />
            <Button bgColor="transparent" borderRadius="full" size="xs">
              <CloseIcon w={3} h={3} />
            </Button>
          </Flex>
        );
      })}
    </Box>
  );
};

export default Channels;
