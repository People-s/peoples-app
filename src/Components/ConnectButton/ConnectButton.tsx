import { Button, ButtonGroup, Icon, IconButton } from "@chakra-ui/react";
import { shortenAddress } from "@usedapp/core";
import { FC, useContext } from "react";
import { Web3ModalContext } from "../Web3Modal/Web3Modal";
import { HiOutlineLogout } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";

interface ConnectButtonProps {
  size?: (string & {}) | "lg" | "md" | "sm" | "xs";
  text: string;
}

const ConnectButton: FC<ConnectButtonProps> = ({ size, text }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // @ts-ignore
  const from = location.state?.from?.pathname || "/dashboard";

  const { account, activateProvider, deactivateProvider } =
    useContext(Web3ModalContext);
  return (
    <div>
      {!account && (
        <Button
          size={size || "sm"}
          colorScheme="blue"
          onClick={() =>
            activateProvider(() => navigate(from, { replace: true }))
          }
        >
          {text}
        </Button>
      )}
      {account && (
        <ButtonGroup size={size || "sm"} isAttached colorScheme="blue">
          <IconButton
            variant="outline"
            aria-label="Disconnect wallet"
            onClick={deactivateProvider}
            icon={<Icon as={HiOutlineLogout} />}
          />
          <Button>{shortenAddress(account)}</Button>
        </ButtonGroup>
      )}
    </div>
  );
};

export default ConnectButton;
