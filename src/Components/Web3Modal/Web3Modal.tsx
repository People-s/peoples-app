import { useEthers, Web3Ethers } from "@usedapp/core";
import React, { createContext, FC, useEffect } from "react";
import Web3Modal, { IProviderOptions } from '@0xsequence/web3modal'
import { sequence } from '0xsequence'
import { useColorMode } from "@chakra-ui/react";

export interface Web3ModalContextValue extends Pick<Web3Ethers, 'account' | 'error' | 'active'> {
    web3Modal: Web3Modal;
    activateProvider: (callback?:Function) => Promise<void | Function>;
    deactivateProvider: () => void;
}

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

const web3Modal = new Web3Modal({
    providerOptions,
    cacheProvider: true,
    disableInjectedProvider: false,
    theme: 'dark'
})

export const Web3ModalContext = createContext<Web3ModalContextValue>({ web3Modal } as Web3ModalContextValue);

const Web3ModalProvider: FC = ({ children }) => {
    const { activate, deactivate, account, error, active } = useEthers();
    const { colorMode } = useColorMode();

    useEffect(() => {
        const initCached = async () => {
            if (web3Modal.cachedProvider && active) {
                const wallet =  await web3Modal.connect();
                await activate(wallet)
            }
        }
        initCached();
    }, [web3Modal, active]);

    useEffect(() => {
        const changeColors = async () => {
            await web3Modal.updateTheme(colorMode);
        };
        changeColors();
    }, [web3Modal, colorMode]);

    const activateProvider = async (callback?: Function) => {
        try {
            const wallet = await web3Modal.connect();
            await activate(wallet);
            if(callback) {
                callback()
            }
        } catch (err: any) {
            console.log(`ERROR: ${err}`)
        }
    }


    const deactivateProvider = async () => {
        try {
            web3Modal.clearCachedProvider();
            await deactivate()
        } catch (err: any) {
            console.log(`ERROR: ${err}`)
        }
    }

    return <Web3ModalContext.Provider value={{ web3Modal, account, error, active, activateProvider, deactivateProvider }}>
        {children}
    </Web3ModalContext.Provider>
}

export default Web3ModalProvider;