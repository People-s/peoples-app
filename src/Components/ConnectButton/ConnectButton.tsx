import { Button } from "@chakra-ui/react";
import { FC, useContext } from "react";
import { Web3ModalContext } from "../Web3Modal/Web3Modal";


const ConnectButton: FC = () => {
    const { account, activateProvider, deactivateProvider } = useContext(Web3ModalContext);
    return <div>
        {!account && <Button colorScheme='blue' onClick={activateProvider}> Connect </Button>}
        {account && <Button colorScheme='blue' onClick={deactivateProvider}> Disconnect </Button>}
        {account && <p>Connected account: {account}</p>}
    </div>
}

export default ConnectButton;