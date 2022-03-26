import {
  Avatar,
  Flex,
  Input,
  Text,
  Switch,
  Button,
  Spacer,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { SettingsIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { Logo } from "../../Logo";
import ConnectButton from "../ConnectButton/ConnectButton";
import ThemeColorButton from "../ThemeColorButton/ThemeColorButton";
import { LogoWhite } from "../../LogoWhite";

const Header: React.FC = () => {
  const userName = "Vitalik Testlord";
  const { colorMode } = useColorMode();

  return (
    <Flex px={6} py={3} alignItems="center" flex="0 1 auto" boxShadow="md">
      <Link to="/">
        <Flex dir="row" alignItems="center">
          {colorMode === "dark" ? (
            <LogoWhite h={10} mr={1} />
          ) : (
            <Logo h={10} mr={1} />
          )}
          <Text fontWeight="bold">eople's</Text>
        </Flex>
      </Link>
      <Spacer />

      <Input placeholder="Search for posts" maxW="xl"></Input>
      <Spacer />

      <Flex flexDir="row" alignItems="center" mr={6}>
        <ThemeColorButton />
      </Flex>
      <Popover>
        <PopoverTrigger>
          <Avatar
            cursor="pointer"
            size="sm"
            name={userName}
            mr={6}
            bgColor="blue.600"
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>{userName}</PopoverHeader>
          <PopoverBody>Profile body</PopoverBody>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger>
          <SettingsIcon w={8} h={8} mr={6} cursor="pointer" />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Settings header</PopoverHeader>
          <PopoverBody>Settings body</PopoverBody>
        </PopoverContent>
      </Popover>

      {/* <Button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        <Text>{isLoggedIn ? "Log out" : "Log in"}</Text>
      </Button> */}
      <ConnectButton text="Connect" />
    </Flex>
  );
};

export default Header;
