import React from 'react'
import { useEthers, useEtherBalance, useContractCall, useCall } from '@usedapp/core'
import { formatEther, formatUnits } from '@ethersproject/units'
import { ethers, utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'


const config = require('./config.json')
console.log(config.address)
const haulersInterface = new utils.Interface(config.abi)
const haulersContractAddress = config.address // REPLACE
const provider = new ethers.providers.JsonRpcProvider("https://speedy-nodes-nyc.moralis.io/b28b81859210c50b438cbf9b/avalanche/mainnet")
const contract = new ethers.Contract(haulersContractAddress, haulersInterface, provider)

/*
const useTotalSupply = async () => {
	let supply = await contract.totalSupply()
	supply = formatUnits(supply, 0)
	console.log(6210-supply)
	return (6210-supply)
}
*/

class MintRemainderTag extends React.Component {
	constructor() {
		super()
		this.state = { data: [] }
	}
	/*

	const useTotalSupply = (): BigNumber | undefined => {
	    const { value, error } = useContractCall({
	      contract: contract,
	      method: 'totalSupply',
	      args: []
	    }) ?? {}
	    if(error) {
	      console.error(error.message)
	      return undefined
	    }
	    return value?.[0]
  	}
  	*/
  	async componentDidMount() {
	    let supply = await contract.totalSupply()
		supply = formatUnits(supply, 0)
	    this.setState({ data: supply });
  	}

	render() {
		let remaining = 6210 - this.state.data
		return (
		<>
			{remaining ? <h6 style={{"color": "#E6A543"}}>{remaining}/6210 Remaining</h6> : <span style={{"display": "none"}}></span>}
		</>
		)
	}
}

export default MintRemainderTag