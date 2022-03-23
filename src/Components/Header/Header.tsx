import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

import { Logo } from "../../Logo";

import { Link } from "react-router-dom";

const ConnectButton: React.FC = () => {
  return (
    <Flex px={6} py={3} alignItems="center" flex="0 1 auto" boxShadow="md">
      <Logo h={10} mr={6} />
      <Text mr={6}>Header</Text>
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </Flex>
  );
};

export default ConnectButton;
