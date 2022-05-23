import { Contract } from '@ethersproject/contracts';
import OldMLOKYABI from '../contracts/OldMLOKY.json';
import NewMLOKYABI from '../contracts/NewMLOKY.json';
import MigrationABI from '../contracts/Migration.json';
import DistributorBUSDABI from '../contracts/DistributorBUSD.json';
import DistributorLUCHOWABI from '../contracts/DistributorLUCHOW.json';
import BUSDABI from '../contracts/BUSD.json';
import LUCHOWABI from '../contracts/LUCHOW.json';
import _OldMLOKYABI from '../contracts/_OldMLOKY.json';
import _NewMLOKYABI from '../contracts/_NewMLOKY.json';
import _MigrationABI from '../contracts/_Migration.json';
import _DistributorBUSDABI from '../contracts/_DistributorBUSD.json';
import _DistributorLUCHOWABI from '../contracts/_DistributorLUCHOW.json';
import _BUSDABI from '../contracts/_BUSD.json';
import _LUCHOWABI from '../contracts/_LUCHOW.json';

export const currentNetwork = process.env.REACT_APP_NETWORK_ID;
export const CONTRACTS_BY_NETWORK = {
  [currentNetwork]: {
    OldMLOKY: {
      // address: '0x3331b6b64bFaC234998b20BD38f606998D2E787A',
      address: '0x11C97Fc75E1ecf0F7315c0f7c15cF94782795aE3',
      // abi: _OldMLOKYABI
      abi: OldMLOKYABI
    },
    NewMLOKY: {
      // address: "0x9e8E809089fFAD6281A233991C6F3407bf29bA41",
      address: "0xF71E950758310faF9f7D51C4F4250C7546086C1f",
      // abi: _NewMLOKYABI
      abi: NewMLOKYABI
    },
    Migration: {
      // address: "0x5a596468a8fd974Af271422e22Be2478A9810C43",
      address: "0x8282D1167Fd603150AbEce958Ea340a6B544e47d",
      // abi: _MigrationABI
      abi: MigrationABI
    },
    DistributorBUSD: {
      // address: "0xF57f70BB0F0Faf8051Fad7dFa8D38e7114aFBA6a",
      address: "0x603d14cf630c109c61779319f77F7D382180563B",
      // abi: _DistributorBUSDABI
      abi: DistributorBUSDABI
    },
    DistributorLUCHOW: {
      // address: "0xF29A7C6d8e9f6dE0aFF1856ff7E7492e4bF656A3",
      address: "0xCFcD0C52F1Ae02Be4Df96dfc89323E9C36ebAc13",
      // abi: _DistributorLUCHOWABI
      abi: DistributorLUCHOWABI
    },
    BUSD: {
      // address: "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7",
      address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
      // abi: _BUSDABI
      abi: BUSDABI
    },
    LUCHOW: {
      // address: "0xc3d43C32eA0240B49dD4a3b7401299ca6c23B494", // Daniel token
      address: "0xe4e8e6878718bfe533702D4a6571Eb74D79b0915",
      // abi: _LUCHOWABI
      abi: LUCHOWABI
    },
  },
}
export function getContractInfo(name, chainId = null) {
  if(!chainId) chainId = currentNetwork;

  const contracts = CONTRACTS_BY_NETWORK?.[chainId];  
  if(contracts) {
    return contracts?.[name];
  }else{
    return null;
  }
}
export function getContractObj(name, chainId, provider) {
  const info = getContractInfo(name, chainId);
  return !!info && new Contract(info.address, info.abi, provider);
}

export const shorter = (str) =>
  str?.length > 8 ? str.slice(0, 6) + '...' + str.slice(-4) : str
export function formatNum(value) {
  let intValue = Math.floor(value)
  if (intValue < 10) {
    return ''+ parseFloat(value).toFixed(2)
  } else if (intValue < 1000){
    return '' + intValue
  } else if (intValue < 1000000) {
    return parseFloat(intValue/1000).toFixed(1) + 'K'
  } else if (intValue < 1000000000) {
    return parseFloat(intValue/1000000).toFixed(1) + 'M'
  } else {
    return parseFloat(intValue/1000000000).toFixed(1) + 'G'
  }
}
