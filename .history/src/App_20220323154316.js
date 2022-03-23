import logo from "./logo.svg";
import "./App.css";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";

function App() {
  
  const providerOptions = {
    walletconnect:{
      package:WalletConnectProvider,
      options:{
        rpc: {
          56: 'https://bsc-dataseed1.binance.org'
        },
        chainId:56
      }
    }
  }

  const web3modal = new Web3Modal ({
    network
  })
  return (
    <main>
      <button className="btn">Sign in using metamask</button>
      <button
        className="btn"
        //  onClick={() => connectWallet()}
      >
        Sign in using wallet connect
      </button>
    </main>
  );
}

export default App;
