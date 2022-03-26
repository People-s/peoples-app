import { FC, useContext, useEffect, useMemo, useState } from "react";
import { Box, Flex, useColorMode } from "@chakra-ui/react";
import CreateNetworks from "./CreateNetworks";
import JoinChannelList from "../../Components/JoinChannelList/JoinChannelList";

import Channels from "../../Components/Channels/Channels";
import CurrentlyOnline from "../../Components/CurrentlyOnline/CurrentlyOnline";
import NewChannel from "../../Components/NewChannel/NewChannel";
import PostWall from "../../Components/PostsWall/PostsWall";
import AppNetworkContext from "../../Components/AppNetworksContext/AppNetworkContext";

const Dashboard: FC = () => {
  const [view, setView] = useState<string | undefined>("Join");
  const [profiles, setProfiles] = useState<any[]>([])
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { getProfiles } = useContext(AppNetworkContext);

  const { colorMode } = useColorMode();
  const boxBackground = useMemo(
    () => (colorMode === "dark" ? "gray.700" : "gray.50"),
    [colorMode]
  );

  useEffect(() => {
    async function getChannels() {
      const receivedProfiles = await getProfiles();
      console.log(receivedProfiles)
      //@ts-ignore
      setProfiles(receivedProfiles)
    }
    getChannels()
  }, [])

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
          selectedIndex={selectedIndex}
          setSelectedIndex={(index: any) => setSelectedIndex(index)}
          changeView={(a: string) => setView(a)}
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

        {selectedIndex ? (
          <PostWall />
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
