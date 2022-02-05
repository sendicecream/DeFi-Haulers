import React, { useState } from 'react'
import '../style.css';
import { useEthers, useContractFunction } from '@usedapp/core'
import { formatEther, formatUnits } from '@ethersproject/units'
import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'

const config = require('./config.json')
console.log(config.address)
const haulersInterface = new utils.Interface(config.abi)
const haulersContractAddress = config.address // REPLACE
const contract = new Contract(haulersContractAddress, haulersInterface)

const MintButton = () => {
  const { account } = useEthers()
  contract.connect(account)

  const { state, send } = 
    useContractFunction(
      contract,
      'mintHauler',
       { transactionName: 'Mint Haulers'}
    )

  const [value, setValue] = useState('1')

  const handleInput = (input) => {
    console.log(input.target.value)
    setValue(input.target.value)
  }
  const handleClick = () => {
    if(value >= 1) {
      send("" + String(value), { value: utils.parseEther(value) }) 
    }
  }

  return (
    <div className="mint-interface">
      {(value <= 0) ? <span className="">Invalid number of haulers: {value}</span> : <span style={{"display": "none"}}></span>}
      <input type="number" id="quantity" name="quantity" onChange={handleInput} min="1" />
      {state.status == "Mining" ? <span className="">Transaction pending...</span> : <span style={{"display": "none"}}></span>}
      <button className={`sendEthButton btn btn-success`} disabled={!account} onClick={() => {handleClick()}}>
        Mint
      </button>
    </div>
  )
}

export default MintButton