import React, { useState } from 'react'
import '../style.css';
import { useEthers, useEtherBalance } from '@usedapp/core'
import { formatEther, formatUnits } from '@ethersproject/units'
import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import { useContractFunction__fix, connectContractToSigner } from './UseDAppFix'

const config = require('./config.json')
const haulersInterface = new utils.Interface(config.abi)
const haulersContractAddress = config.address // REPLACE
const contract = new Contract(haulersContractAddress, haulersInterface)

const MintButton = () => {
  const { account, chainId } = useEthers()
  const avaxBalance = useEtherBalance(account)
  contract.connect(account)

  const { state, send } = 
    useContractFunction__fix(
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
      {(account && avaxBalance) ? <span className="information-text">Your balance: {formatEther(avaxBalance).substring(0,6)} AVAX</span> : <span style={{"display": "none"}}></span>}
      <div className="mint-buttons">
        <input className="num-to-mint" type="number" id="quantity" name="quantity" onChange={handleInput} min="1" />
        {(account && avaxBalance && (chainId === 43114 || chainId === 4) && (state.status != "PendingSignature") && value >= 1 && (formatEther(avaxBalance) >= value))
          ?
          <button className={`sendEthButton btn btn-success`} disabled={!account} onClick={() => {handleClick()}}>Mint</button>
          :
          <button className={'btn btn-success disabled'} disabled>Mint</button>
        }
      </div>
      {state.status == "PendingSignature" ? <span className="information-text">Transaction pending...</span> : <span style={{"display": "none"}}></span>}
      {(value <= 0) ? <span className="information-text">Invalid number of haulers: {value}</span> : <span style={{"display": "none"}}></span>}
      {(chainId === 43114 || chainId === 4) ? <span style={{"display": "none"}}></span> : <span className="information-text">Please connect to the Avalanche Network!</span>}
    </div>
  )
}

export default MintButton