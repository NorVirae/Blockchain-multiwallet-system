import logo from "./logo.svg";
import "./App.css";
// import Web3 from "web3";
// import WalletConnectProvider from "@walletconnect/web3-provider";
// import Web3Modal from "web3modal";

function App() {
  // const connectProvider = new WalletConnectProvider.default({
  //   rpc: {
  //     56: "https://bsc-dataseed1.binance.org",
  //   },
  //   chainId: 56,
  // });

  // const connectWallet = async () => {
  //   await connectProvider.enable();

  //   const web3modal = new Web3Modal({
  //     network: "mainnet",
  //     providerOptions,
  //   });
  //   const connectWeb3Modal = await web3modal.connect();
  //   await web3modal.toggleModal();

  //   const web3 = new Web3(connectProvider);
  //   const accounts = await web3.eth.getAccounts();
  //   account = accounts[0];
  // };
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
