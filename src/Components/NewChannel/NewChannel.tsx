import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Icon,
  HStack,
  Stack,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Checkbox,
  VStack,
  Select,
} from "@chakra-ui/react";
import { Description } from "@ethersproject/properties";
import React, { Dispatch, SetStateAction, useMemo, useState } from "react";
import {
  MdCopyright,
  MdSupervisorAccount,
  MdCreate,
  MdThumbUp,
} from "react-icons/md";
import { ChannelListProps } from "../JoinChannelList/JoinChannelList";

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

const NewChannel: React.FC<ChannelListProps> = ({
  typeOfTheList,
  changeView,
}) => {
  return (
    <Box>
      <HStack borderBottom="1px solid #E4E4E4" p="2" justify="space-between">
        <Text fontSize="xl" fontWeight="bold">
          Create a new channel proposal
        </Text>
        <Box>
          <Button
            m="2"
            colorScheme="teal"
            size="sm"
            leftIcon={<Icon as={MdCreate} mt="auto" />}
            onClick={() => changeView("List")}
          >
            List
          </Button>{" "}
          <Button
            colorScheme="teal"
            size="sm"
            leftIcon={<Icon as={MdThumbUp} mt="auto" />}
            onClick={() => changeView("Vote")}
          >
            Vote
          </Button>
        </Box>
      </HStack>
      <Text fontSize="sm" m="2" textColor="gray">
        Remember that you need People’s NFT to create a channel!
      </Text>
      <Box>
        <HStack>
          <Stack spacing={3}>
            <FormControl mt="10" width="100%">
              <FormLabel htmlFor="ChannelsTitle">Channel Title</FormLabel>
              <Input
                id="ChannelsTitle"
                background="white"
                placeholder="Channels Title"
              />
              <FormHelperText>Must be unique!</FormHelperText>
              <FormLabel htmlFor="Description" mt="4">
                Description
              </FormLabel>
              <Input
                id="Description"
                background="white"
                placeholder="Description"
              />
              <FormHelperText>Must be unique!</FormHelperText>
              <Text fontSize="md" fontWeight="bold" mt="4">
                Requirements
              </Text>
              <HStack mt="10">
                <Checkbox mr="auto">Own NFT</Checkbox>
                <Box>
                  <FormLabel htmlFor="NFTAddress">
                    NFT Smart contract address
                  </FormLabel>
                  <Input
                    id="NFTAddress"
                    background="white"
                    placeholder="0xF949fd9f94jf9949"
                  />
                </Box>
              </HStack>
              <HStack mt="10">
                <Checkbox mr="auto">Stake token</Checkbox>
                <Box>
                  <FormLabel htmlFor="TokenName">Token name</FormLabel>
                  <Select placeholder="Select Token" id="TokenName">
                    <option value="matic">MATIC</option>
                    <option value="eth">ETH</option>
                    <option value="BNB">BNB</option>
                  </Select>
                </Box>
                <Box>
                  <FormLabel htmlFor="TokenAmount">Amount</FormLabel>
                  <Input
                    id="TokenAmount"
                    background="white"
                    type="number"
                    placeholder="42"
                  />
                </Box>
              </HStack>
            </FormControl>
          </Stack>
          <Box>
            <Avatar
              cursor="pointer"
              size="xl"
              name="S A"
              ml="20"
              bgColor="gray"
            />
            <Button
              colorScheme="white"
              variant="outline"
              size="sm"
              width="70%"
              ml="7"
              mt="10"
            >
              Upload Image
            </Button>
          </Box>
        </HStack>
        <HStack mt="10" align="center">
          <Button colorScheme="white" variant="outline" size="sm" width="100%">
            Cancel
          </Button>
          <Button colorScheme="teal" size="sm" width="100%">
            Create
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default NewChannel;
