import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";
import { DAppProvider, Rinkeby, Config, Mumbai } from "@usedapp/core";
import { MoralisProvider } from "react-moralis";
import Web3ModalProvider from "./Components/Web3Modal/Web3Modal";

const dappProviderConfig: Config = {
  readOnlyChainId: Mumbai.chainId,
  readOnlyUrls: {
    [Mumbai.chainId]:
      "https://polygon-mumbai.g.alchemy.com/v2/RODUefryhNJjEBJ6VyVsUH_DBEoWRZxo",
    [Rinkeby.chainId]:
      "https://rinkeby.infura.io/v3/460f40a260564ac4a4f4b3fffb032dad",
  },
};

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: '"Saira", sans-serif',
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <BrowserRouter>
      <MoralisProvider
        serverUrl="https://u8qcgk2dukyn.usemoralis.com:2053/server"
        appId="l19ZlcLJ32Ya1NBeYGuAPoHUohs5UnMA5roDL9eS"
      >
        <DAppProvider config={dappProviderConfig}>
          <ChakraProvider theme={theme}>
            <Web3ModalProvider>
              <App />
            </Web3ModalProvider>
          </ChakraProvider>
        </DAppProvider>
      </MoralisProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
