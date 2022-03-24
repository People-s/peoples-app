import {
  Heading,
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import React, { useMemo, useState } from "react";

import { CloseIcon } from "@chakra-ui/icons";

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

const Channels: React.FC = () => {
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
        Channels
      </Heading>
      {mockChannels.map(({ name }, index) => {
        return (
          <Flex
            dir="row"
            p={3}
            borderRadius="lg"
            cursor="pointer"
            alignItems="center"
            onClick={() => setSelectedIndex(index)}
            borderColor={index === selectedIndex ? tileBorderColor : "transparent"}
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
