import { FC } from "react";
import { Box, Button, Text, Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ConnectButton from "../../Components/ConnectButton/ConnectButton";

import { init } from "./script";

const Home: FC = () => {
  window.onload = function () {
    init();
  };

  return (
    <>
      <Box
        id="canvas"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
        }}
      />
      {/* page one */}
      <Grid
        p={4}
        color="white"
        h="100%"
        minH="100vh"
        display="flex"
        placeContent="center"
        alignItems="center"
        flexDirection="column"
        bgPosition="center"
        bgAttachment="fixed"
        pos="relative"
      >
        <Text>This is the Application Homepage</Text>
        <Text>
          This is the Application HomepageThis is the Application HomepageThis
          is the Application Homepage
        </Text>
        <ConnectButton />
        <Link to="/dashboard">
          <Button>Go to App</Button>
        </Link>
      </Grid>
      {/* page two */}
      <Grid
        p={4}
        color="white"
        h="100%"
        minH="100vh"
        display="flex"
        placeContent="center"
        alignItems="center"
        flexDirection="column"
        bgPosition="center"
        bgAttachment="fixed"
        pos="relative"
      >
        <Text>This is the Application Homepage</Text>
        <Text>
          This is the Application HomepageThis is the Application HomepageThis
          is the Application Homepage
        </Text>
      </Grid>
    </>
  );
};

export default Home;
