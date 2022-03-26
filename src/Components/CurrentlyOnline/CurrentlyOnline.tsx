import { Heading, Box, Flex, Avatar, Text, useColorMode } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";

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
  const { colorMode } = useColorMode();
  const tileBackground = useMemo(() => colorMode === 'dark' ? "blue.800" : "blue.50", [colorMode]);
  const tileBorderColor = useMemo(() => colorMode === 'dark' ? "blue.700" : "blue.100", [colorMode]);
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
            key={index}
            dir="row"
            p={2}
            borderRadius="lg"
            cursor="pointer"
            alignItems="center"
            onClick={() => setSelectedIndex(index)}
            borderWidth={1}
            borderColor={index === selectedIndex ? tileBorderColor : "transparent"}
            bgColor={index === selectedIndex ? tileBackground : "transparent"}
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
              <Text
                fontSize="xs"
                overflow="hidden"
                textOverflow="ellipsis"
                textColor="blue.300"
              >
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
