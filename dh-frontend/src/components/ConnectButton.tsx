import "../App.css";
import "../style.css";
import React from "react";
import { useEthers } from "@usedapp/core";

const ConnectButton = () => {
  const { activateBrowserWallet, deactivate, account, chainId } = useEthers();
  return (
    <div className="connect-div">
      {newFunction(chainId) ? (
        <span style={{ display: "none" }} className="info-subtext"></span>
      ) : (
        <span className="info-subtext error">Connect to Avax </span>
      )}
      {account ? (
        <span className="info-subtext">
          {account.substring(0, 6)}…{account.substring(account.length - 4)}
        </span>
      ) : (
        <span className="info-subtext-not">Not Connected</span>
      )}
      {account ? (
        <button
          className="connect-button enableEthereumButton btn btn-primary"
          onClick={() => deactivate()}
        >
          Disconnect
        </button>
      ) : (
        <button
          className="connect-button enableEthereumButton btn btn-primary"
          onClick={() => activateBrowserWallet()}
        >
          Connect
        </button>
      )}
    </div>
  );
};

export default ConnectButton;
function newFunction(chainId: number | undefined) {
	return chainId === 43114;
}

