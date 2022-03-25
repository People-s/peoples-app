import { FC, useMemo, useState } from "react";
import { Box, Flex, useColorMode } from "@chakra-ui/react";
import CreateNetworks from "./CreateNetworks";
import JoinChannelList from "../../Components/JoinChannelList/JoinChannelList";

import Channels from "../../Components/Channels/Channels";
import CurrentlyOnline from "../../Components/CurrentlyOnline/CurrentlyOnline";

const Dashboard: FC = () => {
  const [view, setView] = useState<string | undefined>("Join");

  const { colorMode } = useColorMode();
  const boxBackground = useMemo(
    () => (colorMode === "dark" ? "gray.700" : "gray.50"),
    [colorMode]
  );
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
        <Channels />
      </Box>
      <Box
        bgColor={boxBackground}
        flex={1}
        mx={6}
        p={6}
        borderRadius={4}
        boxShadow="lg"
      >
        {/*<CreateNetworks /> */}
        <JoinChannelList
          typeOfTheList={view}
          changeView={(a: string) => setView(a)}
        />
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
