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
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useContext, useMemo } from "react";

import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { MdCreate, MdThumbUp, MdViewList } from "react-icons/md";
import AppNetworkContext from "../AppNetworksContext/AppNetworkContext";

export interface ChannelsProps {
  activeChannel: any;
  setActiveChannel?: any;
  changeView?: any;
  channels: any;
}

const Channels: React.FC<ChannelsProps> = ({
  activeChannel,
  setActiveChannel,
  changeView,
  channels,
}) => {
  const { followAttempt } = useContext(AppNetworkContext);
  const { colorMode } = useColorMode();
  const tileBackground = useMemo(
    () => (colorMode === "dark" ? "blue.800" : "blue.50"),
    [colorMode]
  );
  const tileBorderColor = useMemo(
    () => (colorMode === "dark" ? "blue.700" : "blue.100"),
    [colorMode]
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

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
      <HStack justify="space-between" mb={4}>
        <Button
          colorScheme="blue"
          size="sm"
          leftIcon={<Icon as={MdViewList} mt="auto" />}
          onClick={() => {
            changeView("Join");
            setActiveChannel(null);
          }}
        >
          Join
        </Button>{" "}
        <Button
          colorScheme="blue"
          size="sm"
          leftIcon={<Icon as={MdCreate} mt="auto" />}
          onClick={() => {
            changeView("Create");
            setActiveChannel(null);
          }}
        >
          Create
        </Button>{" "}
        <Button
          colorScheme="blue"
          size="sm"
          leftIcon={<Icon as={MdThumbUp} mt="auto" />}
          onClick={() => {
            changeView("Vote");
            setActiveChannel(null);
          }}
        >
          Vote
        </Button>
      </HStack>
      {/*@ts-ignore */}
      {channels.map(({ id, attributes: { handle, profileId } }) => {
        return (
          <Flex
            key={id}
            dir="row"
            p={3}
            borderRadius="lg"
            cursor="pointer"
            alignItems="center"
            onClick={() => setActiveChannel(profileId)}
            borderColor={
              profileId === activeChannel ? tileBorderColor : "transparent"
            }
            borderWidth={1}
            bgColor={
              profileId === activeChannel ? tileBackground : "transparent"
            }
          >
            <Avatar
              cursor="pointer"
              size="sm"
              name={handle}
              mr={6}
              bgColor="gray"
              src={"https://placekitten.com/100/100"}
            />
            <Text>{handle}</Text>
            <Spacer />
            <Button
              variant="ghost"
              colorScheme="blue"
              borderRadius="full"
              size="xs"
              onClick={onOpen}
            >
              Follow
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalCloseButton />
                <ModalBody textAlign="center" pt={6}>
                  <Flex mb={3} justifyContent="center">
                    <Flex
                      bgColor="blue.100"
                      w={12}
                      h={12}
                      borderRadius="full"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <CheckIcon color="blue.300" />
                    </Flex>
                  </Flex>
                  <Text fontSize="lg" fontWeight="600" mb={4}>
                    Are you sure you want to join this channel?
                  </Text>
                  <Text fontWeight="light" fontSize="sm">
                    Remember that you need to meet requirements to join the
                    given channel.
                  </Text>
                </ModalBody>

                <ModalFooter>
                  <Button variant="ghost" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button
                    colorScheme="blue"
                    onClick={() => {
                      followAttempt(Number(profileId));
                      onClose();
                    }}
                  >
                    Continue
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

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
