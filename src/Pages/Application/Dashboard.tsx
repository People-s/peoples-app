import { FC, useContext, useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import CreateNetworks from "./CreateNetworks";
import JoinChannelList from "../../Components/JoinChannelList/JoinChannelList";

import Channels from "../../Components/Channels/Channels";
import CurrentlyOnline from "../../Components/CurrentlyOnline/CurrentlyOnline";
import NewChannel from "../../Components/NewChannel/NewChannel";
import PostWall from "../../Components/PostsWall/PostsWall";
import AppNetworkContext from "../../Components/AppNetworksContext/AppNetworkContext";
import { useMoralis } from "react-moralis";
import { MdViewList, MdCreate, MdThumbUp } from "react-icons/md";

const Dashboard: FC = () => {
  const [view, setView] = useState<string | undefined>("Join");
  const [profiles, setProfiles] = useState<any[]>([]);
  const [activeChannel, setActiveChannel] = useState<string | null>(null);
  const { addresses, getProfiles } = useContext(AppNetworkContext);
  const { isInitialized } = useMoralis();

  const { colorMode } = useColorMode();
  const boxBackground = useMemo(
    () => (colorMode === "dark" ? "gray.700" : "gray.50"),
    [colorMode]
  );

  useEffect(() => {
    async function getChannels() {
      if (isInitialized) {
        const receivedProfiles = await getProfiles();
        const channels = receivedProfiles.filter((p: any) => {
          return (
            p.attributes.creator.toLowerCase() ===
            addresses["Peoples Channel"].toLowerCase()
          );
        });
        //@ts-ignore
        setProfiles(channels);
      }
    }
    getChannels();
  }, [isInitialized]);

  return (
    <Flex p={6} flex="1 1 auto">
      {/* out of all the boxes (channels, central & online) 
      we can and probably should make wrapper components for their respective content */}
      <Box
        bgColor={boxBackground}
        minW="20%"
        maxW="25%"
        p={2}
        borderRadius={4}
        boxShadow="lg"
      >
        <Channels
          activeChannel={activeChannel}
          setActiveChannel={(channelId: string) => setActiveChannel(channelId)}
          channels={profiles}
        />
      </Box>
      <Box
        bgColor={boxBackground}
        flex={1}
        mx={6}
        pt={6}
        pl={4}
        pr={4}
        borderRadius={4}
        boxShadow="lg"
      >
        {/*<CreateNetworks /> */}
        <HStack
          justify="space-between"
          mb={4}
          borderBottom="1px"
          borderColor="gray.200"
        >
          <Button
            borderBottomRightRadius={0}
            backgroundColor={
              colorMode === "dark"
                ? view === "Join"
                  ? "gray.400"
                  : "gray.600"
                : view === "Join"
                ? "blue.400"
                : "blue.100"
            }
            textColor={
              colorMode === "dark"
                ? view === "Join"
                  ? "gray.700"
                  : "blue.100"
                : view === "Join"
                ? "white"
                : "blue.700"
            }
            borderBottomLeftRadius={0}
            size="sm"
            leftIcon={<Icon as={MdViewList} mt="auto" />}
            onClick={() => {
              setView("Join");
              setActiveChannel(null);
            }}
          >
            Join
          </Button>{" "}
          <Button
            borderBottomRightRadius={0}
            backgroundColor={
              colorMode === "dark"
                ? view === "Create"
                  ? "gray.400"
                  : "gray.600"
                : view === "Create"
                ? "blue.400"
                : "blue.100"
            }
            textColor={
              colorMode === "dark"
                ? view === "Create"
                  ? "gray.700"
                  : "blue.100"
                : view === "Create"
                ? "white"
                : "blue.700"
            }
            borderBottomLeftRadius={0}
            size="sm"
            leftIcon={<Icon as={MdCreate} mt="auto" />}
            onClick={() => {
              setView("Create");
              setActiveChannel(null);
            }}
          >
            Create
          </Button>{" "}
          <Button
            borderBottomRightRadius={0}
            backgroundColor={
              colorMode === "dark"
                ? view === "Vote"
                  ? "gray.400"
                  : "gray.600"
                : view === "Vote"
                ? "blue.400"
                : "blue.100"
            }
            textColor={
              colorMode === "dark"
                ? view === "Vote"
                  ? "gray.700"
                  : "blue.100"
                : view === "Vote"
                ? "white"
                : "blue.700"
            }
            borderBottomLeftRadius={0}
            size="sm"
            leftIcon={<Icon as={MdThumbUp} mt="auto" />}
            onClick={() => {
              setView("Vote");
              setActiveChannel(null);
            }}
          >
            Vote
          </Button>
        </HStack>

        {activeChannel ? (
          <PostWall
            channel={profiles.find(
              (p) => p.attributes.profileId === activeChannel
            )}
          />
        ) : view === "Create" ? (
          <NewChannel
            typeOfTheList={view}
            changeView={(a: string) => setView(a)}
          />
        ) : (
          <JoinChannelList
            typeOfTheList={view}
            changeView={(a: string) => setView(a)}
          />
        )}
      </Box>
      <Box
        bgColor={boxBackground}
        minW="20%"
        maxW="25%"
        p={2}
        borderRadius={4}
        boxShadow="lg"
      >
        <CurrentlyOnline />
      </Box>
    </Flex>
  );
};

export default Dashboard;
