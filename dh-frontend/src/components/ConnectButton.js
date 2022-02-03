import '../App.css'
import '../style.css';
import React from 'react'
import { useEthers } from '@usedapp/core'

const ConnectButton = () => {
	const { activateBrowserWallet, deactivate, account, chainId } = useEthers()
	return (
		<div className="connect-div">
		{chainId === 43114 ? <span style={{"display": "none"}} className="info-subtext"></span> : <span className="info-subtext error">Connect to Avax </span> }
		{account ? <span className="info-subtext">{account.substring(0,8)}…{account.substring(account.length-6)}</span> : <span className="info-subtext error">Not Connected</span>}
		{account ?
		(
			<button className="connect-button enableEthereumButton btn btn-primary" onClick={() => deactivate()}>
			Disconnect
			</button>	
		) : (
			<button className="connect-button enableEthereumButton btn btn-primary" onClick={() => activateBrowserWallet()}>
			Connect
			</button>
		)}
		</div>
	)
}

export default ConnectButton