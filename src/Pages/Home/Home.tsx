import { FC, useContext } from "react";
import { Box, Button, Text, Grid, Flex, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ConnectButton from "../../Components/ConnectButton/ConnectButton";

import { init } from "./script";
import { Logo } from "../../Logo";
import { LogoWhite } from "../../LogoWhite";
import { Web3ModalContext } from "../../Components/Web3Modal/Web3Modal";

const Home: FC = () => {
  window.onload = function () {
    init();
  };

  const { colorMode } = useColorMode();
  console.log("colorMode", colorMode);

  const { account } = useContext(Web3ModalContext);

  return (
    <>
      <Box id="canvas" position="fixed" height="100%" width="100%" />
      {/* page one */}
      <Box position="fixed" ml={6} mt={3}>
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
      </Box>
      <Grid
        p={4}
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
        <Text mb={4}>
          People's is a social media platform powered by Lens Protocol and
          Polygon.
        </Text>
        <Flex>
          <Box mr={4}>
            <ConnectButton text="Join" size="md" />
          </Box>
          {account && (
            <Link to="/dashboard">
              <Button>Enter</Button>
            </Link>
          )}
        </Flex>
      </Grid>
      {/* page two */}
      <Grid
        p={4}
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
        <Text>
          Connect with people with similar causes & ideas and share the meaning
          and significance of NFT's. Be part of the next-gen Social Media by
          participating in creating the future.
        </Text>
        <Text>
          Our mission is to get users of web 2.0 to web 3.0 and attract them
          with new kind of communication style. It is easy just click connect
          button and connect to the future of web
        </Text>
      </Grid>
    </>
  );
};

export default Home;
