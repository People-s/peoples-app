import { FC } from "react";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ConnectButton from "../../Components/ConnectButton/ConnectButton";



const Home: FC = () => {
    return (<>
        <Box bg='tomato' w='100%' p={4} color='white'>
            This is the Aplication Homepage
        </Box>
        <ConnectButton />
        <Link to="/application"><Button>Go to App</Button></Link>
    </>)
} 

export default Home;