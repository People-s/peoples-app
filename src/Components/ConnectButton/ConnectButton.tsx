import { Button } from "@chakra-ui/react";
import { useEthers } from "@usedapp/core";
import React, { FC, useEffect, useState } from "react";
import { sequence } from '0xsequence'

import Web3Modal, { IProviderOptions } from '@0xsequence/web3modal'

let providerOptions = {
    injected: {
        display: {
            name: 'Metamask',
            description: 'Connect to your MetaMask wallet',
        },
        package: null,
    }
} as IProviderOptions

if (!window?.ethereum?.isSequence) {
    providerOptions = {
        ...providerOptions,
        sequence: {
            package: sequence,
            options: {
                appName: 'People',
                defaultNetwork: 'rinkeby'
            }
        }
    } as IProviderOptions
}

const ConnectButton: FC = () => {
    const [web3Modal, setWeb3Modal] = useState<Web3Modal>()
    const { activate, deactivate, account } = useEthers();

    useEffect(() => {
        setWeb3Modal(new Web3Modal({
            providerOptions,
            cacheProvider: true,
            theme: 'dark'
        }));
    }, []);

    const activateProvider = async () => {
        console.log(web3Modal)

        try {
            const provider = await web3Modal?.connect();
            console.log({provider})
            await activate(provider)
        } catch (err: any) {
            console.log(`ERROR: ${err}`)
        }
    }

    return <div>
        {!account && <Button colorScheme='blue' onClick={activateProvider}> Connect </Button>}
        {account && <Button colorScheme='blue' onClick={deactivate}> Disconnect </Button>}
        {account && <p>Connected account: {account}</p>}
    </div>
}

export default ConnectButton;