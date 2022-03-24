import { FC } from "react";
import { Box, Flex } from "@chakra-ui/react";
import CreateNetworks from "./CreateNetworks";

import Channels from "../../Components/Channels/Channels";
import CurrentlyOnline from "../../Components/CurrentlyOnline/CurrentlyOnline";

const Dashboard: FC = () => {
  return (
    <Flex p={6} flex="1 1 auto">
      {/* out of all the boxes (channels, central & online) 
      we can and probably should make wrapper components for their respective content */}
      <Box
        bgColor="gray.50"
        minW="20%"
        maxW="25%"
        p={2}
        borderRadius={4}
        boxShadow="lg"
      >
        <Channels />
      </Box>
      <Box
        bgColor="gray.50"
        flex={1}
        mx={6}
        p={6}
        borderRadius={4}
        boxShadow="lg"
      >
        {/*<CreateNetworks /> */}
      </Box>
      <Box
        bgColor="gray.50"
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
