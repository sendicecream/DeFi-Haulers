import React, { useState } from 'react'
import '../style.css';
import { useEthers, useEtherBalance, TransactionStatus } from '@usedapp/core'
import { formatEther, formatUnits } from '@ethersproject/units'
import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import { useContractFunction__fix, connectContractToSigner } from './UseDAppFix'
import { newFunction } from './newFunction';
import { newFunction } from './newFunction.1';
import { newFunction } from './newFunction.2';
import { newFunction } from './newFunction.3';
import { newFunction } from './newFunction.4';
import { newLocal_1 } from './newLocal_1';

const config = require('./config.json')
const haulersInterface = new utils.Interface(config.abi)
const haulersContractAddress = config.address // REPLACE
export const contract = new Contract(haulersContractAddress, haulersInterface)

const MintButton = () => {
  const { account, chainId } = useEthers()
  const avaxBalance = useEtherBalance(account)
  const correctChainId = newFunction_1(chainId)
  newFunction(account);

  const { state, send } = 
    useContractFunction__fix(
      contract,
      'mintHauler',
       { transactionName: 'Mint Haulers'}
    )

  const [value, setValue] = useState('1')

  const handleInput = (input: { target: { value: React.SetStateAction<string>; }; }) => {
    console.log(input.target.value)
    setValue(input.target.value)
  }
  const handleClick = () => {
    const newLocal = newFunction();
    if(newLocal) {
      send("" + String(value), { value: utils.parseEther(value) }) 
    }

    function newFunction() {
      return newFunction_1(value);
    }
  }

  return (
    <div className="mint-interface">
      {(account && avaxBalance && correctChainId) ? <span className="information-text">Your balance: {formatEther(avaxBalance).substring(0,6)} AVAX</span> : <span style={{"display": "none"}}></span>}
      <div className="mint-buttons">
        <input className="num-to-mint" type="number" id="quantity" name="quantity" onChange={handleInput} min="1" />
        {(account && avaxBalance && correctChainId && (newFunction_4(state)) && newFunction_5(value) && (formatEther(avaxBalance) >= value))
          ?
          <button className={`sendEthButton btn btn-success`} disabled={!account} onClick={() => {handleClick()}}>Mint</button>
          :
          <button className={'btn btn-success disabled'} disabled>Mint</button>
        }
      </div>
      {newFunction_2(state) ? <span className="information-text">Transaction pending...</span> : <span style={{"display": "none"}}></span>}
      {newFunction(value) ? <span className="information-text">Invalid number of haulers: {value}</span> : <span style={{"display": "none"}}></span>}
      {correctChainId ? <span style={{"display": "none"}}></span> : <span className="information-text">Please connect to the Avalanche Network!</span>}
    </div>
  )
}

export default MintButton

function newFunction_5(value: string) {
  return newFunction();

  function newFunction() {
    return newFunction_1();
  }

  function newFunction_1() {
    return newFunction_2();
  }

  function newFunction_2() {
    return newLocal;
  }
}

function newFunction_4(state: TransactionStatus) {
  const newLocal_1 = newFunction();
  return newLocal_1;

  function newFunction() {
    return newFunction_1();
  }

  function newFunction_1() {
    return newFunction_2();
  }

  function newFunction_2() {
    const newLocal_2 = newFunction();
    return newLocal_2;

    function newFunction() {
      return newFunction_1();

      function newFunction_1() {
        const newLocal_2 = "PendingSignature";
        const newLocal_1 = newFunction_3(newLocal_2);
        const newLocal = newLocal_1;
        return newLocal;
      }
    }
  }

  function newFunction_3(newLocal_2: string) {
    return state.status != newLocal_2;
  }
}

export function newFunction_3(value: string) {
  return newFunction(value);
}

function newFunction_2(state: TransactionStatus) {
  return newFunction_6(state);
}

function newFunction_6(state: TransactionStatus) {
  const newLocal = newFunction_2();
  return newLocal;

  function newFunction_2(): any {
    return newLocal;
  }
}

function newFunction_1(...args: [value: string]) {
  const newLocal = newLocal_1;
  return newLocal;
}


export function chainId(chainId: any) {
  throw new Error('Function not implemented.');
}

