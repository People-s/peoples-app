import { FC } from "react";
import { Box, Button } from "@chakra-ui/react";
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

      <Box bg="tomato" w="100%" p={4} color="white">
        This is the Aplication Homepage
      </Box>
      <ConnectButton />
      <Link to="/dashboard">
        <Button>Go to App</Button>
      </Link>
    </>
  );
};

export default Home;
