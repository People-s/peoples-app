import { FC } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import CreateNetworks from "./CreateNetworks";

const Dashboard: FC = () => {
  return (
    <Flex p={6} flex="1 1 auto">
      {/* out of all the boxes (channels, central & online) 
      we can and probably should make wrapper components for their respective content */}
      <Box
        bgColor="gray.50"
        minW="20%"
        maxW="25%"
        p={6}
        borderRadius={4}
        boxShadow="md"
      >
        <Heading fontSize="lg" fontWeight="light">
          Channels
        </Heading>
      </Box>
      <Box
        bgColor="gray.50"
        flex={1}
        mx={6}
        p={6}
        borderRadius={4}
        boxShadow="md"
      >
        <CreateNetworks />
      </Box>
      <Box
        bgColor="gray.50"
        minW="20%"
        maxW="25%"
        p={6}
        borderRadius={4}
        boxShadow="md"
      >
        <Heading fontSize="lg" fontWeight="light">
          Currently online
        </Heading>
      </Box>
    </Flex>
  );
};

export default Dashboard;
