import { FC, useMemo, useState } from "react";
import { Box, Flex, useColorMode } from "@chakra-ui/react";
import CreateNetworks from "./CreateNetworks";
import JoinChannelList from "../../Components/JoinChannelList/JoinChannelList";

import Channels from "../../Components/Channels/Channels";
import CurrentlyOnline from "../../Components/CurrentlyOnline/CurrentlyOnline";
import Ceramic from "./Ceramic";

const Dashboard: FC = () => {
  const [view, setView] = useState<string | undefined>("Join");

  const { colorMode } = useColorMode();
  const boxBackground = useMemo(
    () => (colorMode === "dark" ? "gray.700" : "gray.50"),
    [colorMode]
  );
  return (
    <>
      <Ceramic />
    </>

  );
};

export default Dashboard;
