import { FC } from "react";
import { Box, Button } from "@chakra-ui/react";
import { Link, useRoutes } from "react-router-dom";



const Dashboard: FC = () => {
    return (<>
        <Box bg='tomato' w='100%' p={4} color='white'>
            This is the Aplication Dashboard
        </Box>
        <Link to="/"><Button>Go to Home</Button></Link>
    </>)
}

export default Dashboard;