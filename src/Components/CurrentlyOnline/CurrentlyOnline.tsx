import {
  Heading,
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Spacer,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { CloseIcon } from "@chakra-ui/icons";

const mockCurrentlyOnline = [
  {
    name: "Elon Musk",
    address: "0xD034739C2aE807C70Cd703092b946f62a49509D1",
    id: 0,
  },
  {
    name: "Elon Musk",
    address: "0xD034739C2aE807C70Cd703092b946f62a49509D1",
    id: 1,
  },
  {
    name: "Elon Musk",
    address: "0xD034739C2aE807C70Cd703092b946f62a49509D1",
    id: 2,
  },
  {
    name: "Elon Musk",
    address: "0xD034739C2aE807C70Cd703092b946f62a49509D1",
    id: 3,
  },
  {
    name: "Elon Musk",
    address: "0xD034739C2aE807C70Cd703092b946f62a49509D1",
    id: 4,
  },
  {
    name: "Elon Musk",
    address: "0xD034739C2aE807C70Cd703092b946f62a49509D1",
    id: 5,
  },
  {
    name: "Elon Musk",
    address: "0xD034739C2aE807C70Cd703092b946f62a49509D1",
    id: 6,
  },
];

const CurrentlyOnline: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
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
        Currently online
      </Heading>
      {mockCurrentlyOnline.map(({ name, address }, index) => {
        return (
          <Flex
            dir="row"
            px={2}
            py={2}
            cursor="pointer"
            alignItems="center"
            onClick={() => setSelectedIndex(index)}
            bgColor={index === selectedIndex ? "gray.200" : "transparent"}
          >
            <Avatar
              cursor="pointer"
              size="sm"
              name={name}
              mr={6}
              bgColor="gray"
            />
            <Box overflow="hidden">
              <Text>{name}</Text>
              <Text fontSize="sm" overflow="hidden" textOverflow="ellipsis">
                {address}
              </Text>
            </Box>
          </Flex>
        );
      })}
    </Box>
  );
};

export default CurrentlyOnline;
