/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { StandardArbERC20 } from '../StandardArbERC20'

export class StandardArbERC20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<StandardArbERC20> {
    return super.deploy(overrides || {}) as Promise<StandardArbERC20>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): StandardArbERC20 {
    return super.attach(address) as StandardArbERC20
  }
  connect(signer: Signer): StandardArbERC20__factory {
    return super.connect(signer) as StandardArbERC20__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StandardArbERC20 {
    return new Contract(address, _abi, signerOrProvider) as StandardArbERC20
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approveAndCall',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'approveAndCall',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bridge',
    outputs: [
      {
        internalType: 'contract ArbTokenBridge',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'bridgeBurn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Address',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'bridgeInit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'bridgeMint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        internalType: 'uint8',
        name: 'decimals',
        type: 'uint8',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isMaster',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l1Address',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'migrate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'nonces',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32',
      },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferAndCall',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'transferAndCall',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'transferFromAndCall',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFromAndCall',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b5060fe805460ff19166001179055612ced8061002d6000396000f3fe608060405234801561001057600080fd5b506004361061019a5760003560e01c806374f4f547116100e4578063c1d34b8911610092578063c1d34b8914610752578063c2eeeebd14610816578063cae9ca511461083a578063d505accf146108f3578063d8fbe99414610944578063dd62ed3e1461097a578063e78cea92146109a8578063f3fef3a3146109b05761019a565b806374f4f547146106485780637ecebe00146106745780638c2a993e1461069a57806395d89b41146106c6578063a457c2d7146106ce578063a9059cbb146106fa578063ad68ebf7146107265761019a565b806323b872dd1161014c57806323b872dd146104ad578063313ce567146104e35780633177029f146105015780633644e5151461052d57806339509351146105355780634000aea0146105615780636f791d291461061a57806370a08231146106225761019a565b806301ffc9a71461019f57806306fdde03146101da578063095ea7b3146102575780631296ee62146102835780631624f6c6146102af57806318160ddd146103df578063189db7d2146103f9575b600080fd5b6101c6600480360360208110156101b557600080fd5b50356001600160e01b0319166109dc565b604080519115158252519081900360200190f35b6101e2610a09565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561021c578181015183820152602001610204565b50505050905090810190601f1680156102495780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101c66004803603604081101561026d57600080fd5b506001600160a01b038135169060200135610aa0565b6101c66004803603604081101561029957600080fd5b506001600160a01b038135169060200135610abe565b6103dd600480360360608110156102c557600080fd5b810190602081018135600160201b8111156102df57600080fd5b8201836020820111156102f157600080fd5b803590602001918460018302840111600160201b8311171561031257600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561036457600080fd5b82018360208201111561037657600080fd5b803590602001918460018302840111600160201b8311171561039757600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505050903560ff169150610ae19050565b005b6103e7610baa565b60408051918252519081900360200190f35b6103dd6004803603604081101561040f57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561043957600080fd5b82018360208201111561044b57600080fd5b803590602001918460018302840111600160201b8311171561046c57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610bb0945050505050565b6101c6600480360360608110156104c357600080fd5b506001600160a01b03813581169160208101359091169060400135610ea0565b6104eb610f2d565b6040805160ff9092168252519081900360200190f35b6101c66004803603604081101561051757600080fd5b506001600160a01b038135169060200135610f36565b6103e7610f52565b6101c66004803603604081101561054b57600080fd5b506001600160a01b038135169060200135610f61565b6101c66004803603606081101561057757600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b8111156105a657600080fd5b8201836020820111156105b857600080fd5b803590602001918460018302840111600160201b831117156105d957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610fb5945050505050565b6101c6611010565b6103e76004803603602081101561063857600080fd5b50356001600160a01b0316611019565b6103dd6004803603604081101561065e57600080fd5b506001600160a01b038135169060200135611034565b6103e76004803603602081101561068a57600080fd5b50356001600160a01b0316611094565b6103dd600480360360408110156106b057600080fd5b506001600160a01b0381351690602001356110b5565b6101e2611111565b6101c6600480360360408110156106e457600080fd5b506001600160a01b038135169060200135611172565b6101c66004803603604081101561071057600080fd5b506001600160a01b0381351690602001356111e0565b6103dd6004803603604081101561073c57600080fd5b506001600160a01b0381351690602001356111f4565b6101c66004803603608081101561076857600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b8111156107a257600080fd5b8201836020820111156107b457600080fd5b803590602001918460018302840111600160201b831117156107d557600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061127c945050505050565b61081e6112dd565b604080516001600160a01b039092168252519081900360200190f35b6101c66004803603606081101561085057600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b81111561087f57600080fd5b82018360208201111561089157600080fd5b803590602001918460018302840111600160201b831117156108b257600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506112ec945050505050565b6103dd600480360360e081101561090957600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c0013561133f565b6101c66004803603606081101561095a57600080fd5b506001600160a01b038135811691602081013590911690604001356114d7565b6103e76004803603604081101561099057600080fd5b506001600160a01b03813581169160200135166114f4565b61081e61151f565b6103dd600480360360408110156109c657600080fd5b506001600160a01b038135169060200135611533565b60006001600160e01b0319821663b0202a1160e01b1480610a015750610a01826115ca565b90505b919050565b60368054604080516020601f6002600019610100600188161502019095169490940493840181900481028201810190925282815260609390929091830182828015610a955780601f10610a6a57610100808354040283529160200191610a95565b820191906000526020600020905b815481529060010190602001808311610a7857829003601f168201915b505050505090505b90565b6000610ab4610aad6115e9565b84846115ed565b5060015b92915050565b6000610ada838360405180602001604052806000815250610fb5565b9392505050565b600054610100900460ff1680610afa5750610afa6116d9565b80610b08575060005460ff16155b610b435760405162461bcd60e51b815260040180806020018281038252602e815260200180612b3f602e913960400191505060405180910390fd5b600054610100900460ff16158015610b6e576000805460ff1961ff0019909116610100171660011790555b610b77846116ea565b610b8184846117c0565b610b89611876565b610b9282611920565b8015610ba4576000805461ff00191690555b50505050565b60355490565b60ff546001600160a01b031615610bff576040805162461bcd60e51b815260206004820152600e60248201526d105b1c9958591e481a5b9a5d195960921b604482015290519081900360640190fd5b60fe8054610100600160a81b031916336101000217905560ff80546001600160a01b0319166001600160a01b038416179055805160609081908190602085019082811015610c4c57600080fd5b8101908080516040519392919084600160201b821115610c6b57600080fd5b908301906020820185811115610c8057600080fd5b8251600160201b811182820188101715610c9957600080fd5b82525081516020918201929091019080838360005b83811015610cc6578181015183820152602001610cae565b50505050905090810190601f168015610cf35780820380516001836020036101000a031916815260200191505b5060405260200180516040519392919084600160201b821115610d1557600080fd5b908301906020820185811115610d2a57600080fd5b8251600160201b811182820188101715610d4357600080fd5b82525081516020918201929091019080838360005b83811015610d70578181015183820152602001610d58565b50505050905090810190601f168015610d9d5780820380516001836020036101000a031916815260200191505b5060405260200180516040519392919084600160201b821115610dbf57600080fd5b908301906020820185811115610dd457600080fd5b8251600160201b811182820188101715610ded57600080fd5b82525081516020918201929091019080838360005b83811015610e1a578181015183820152602001610e02565b50505050905090810190601f168015610e475780820380516001836020036101000a031916815260200191505b50604052505050925092509250610e99610e708460405180602001604052806000815250611936565b610e898460405180602001604052806000815250611936565b610e94846012611a3d565b610ae1565b5050505050565b6000610ead848484611a6e565b610f2384610eb96115e9565b610f1e85604051806060016040528060288152602001612be1602891396001600160a01b038a16600090815260346020526040812090610ef76115e9565b6001600160a01b03168152602081019190915260400160002054919063ffffffff611bc516565b6115ed565b5060019392505050565b60385460ff1690565b6000610ada8383604051806020016040528060008152506112ec565b6000610f5c611c5c565b905090565b6000610ab4610f6e6115e9565b84610f1e8560346000610f7f6115e9565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff611c8f16565b6000610fc184846111e0565b50610fd5610fcd6115e9565b858585611ce9565b610f235760405162461bcd60e51b8152600401808060200182810382526026815260200180612b196026913960400191505060405180910390fd5b60fe5460ff1690565b6001600160a01b031660009081526033602052604090205490565b60fe5461010090046001600160a01b03163314611086576040805162461bcd60e51b815260206004820152600b60248201526a4f4e4c595f42524944474560a81b604482015290519081900360640190fd5b6110908282611e40565b5050565b6001600160a01b0381166000908152609960205260408120610a0190611f36565b60fe5461010090046001600160a01b03163314611107576040805162461bcd60e51b815260206004820152600b60248201526a4f4e4c595f42524944474560a81b604482015290519081900360640190fd5b6110908282611f3a565b60378054604080516020601f6002600019610100600188161502019095169490940493840181900481028201810190925282815260609390929091830182828015610a955780601f10610a6a57610100808354040283529160200191610a95565b6000610ab461117f6115e9565b84610f1e85604051806060016040528060258152602001612c9360259139603460006111a96115e9565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff611bc516565b6000610ab46111ed6115e9565b8484611a6e565b60fe5460ff5460408051630d3f3fc360e21b81526001600160a01b0392831660048201523360248201528583166044820152606481018590529051610100909304909116916334fcff0c9160848082019260009290919082900301818387803b15801561126057600080fd5b505af1158015611274573d6000803e3d6000fd5b505050505050565b6000611289858585610ea0565b5061129685858585611ce9565b6112d15760405162461bcd60e51b8152600401808060200182810382526026815260200180612b196026913960400191505060405180910390fd5b5060015b949350505050565b60ff546001600160a01b031681565b60006112f88484610aa0565b50611304848484612026565b610f235760405162461bcd60e51b8152600401808060200182810382526025815260200180612a5a6025913960400191505060405180910390fd5b83421115611394576040805162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015290519081900360640190fd5b6000609a548888886113c9609960008e6001600160a01b03166001600160a01b03168152602001908152602001600020611f36565b604080516020808201979097526001600160a01b0395861681830152939094166060840152608083019190915260a082015260c08082018990528251808303909101815260e090910190915280519101209050600061142782612162565b90506000611437828787876121ae565b9050896001600160a01b0316816001600160a01b03161461149f576040805162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015290519081900360640190fd5b6001600160a01b038a1660009081526099602052604090206114c090612319565b6114cb8a8a8a6115ed565b50505050505050505050565b60006112d58484846040518060200160405280600081525061127c565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b60fe5461010090046001600160a01b031681565b60fe5460ff5460408051630b620b8160e01b81526001600160a01b039283166004820152336024820152858316604482015260648101859052905161010090930490911691630b620b81916084808201926020929091908290030181600087803b1580156115a057600080fd5b505af11580156115b4573d6000803e3d6000fd5b505050506040513d6020811015610ba457600080fd5b6001600160e01b031916600090815260cc602052604090205460ff1690565b3390565b6001600160a01b0383166116325760405162461bcd60e51b8152600401808060200182810382526024815260200180612c6f6024913960400191505060405180910390fd5b6001600160a01b0382166116775760405162461bcd60e51b8152600401808060200182810382526022815260200180612a386022913960400191505060405180910390fd5b6001600160a01b03808416600081815260346020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b60006116e430612322565b15905090565b600054610100900460ff168061170357506117036116d9565b80611711575060005460ff16155b61174c5760405162461bcd60e51b815260040180806020018281038252602e815260200180612b3f602e913960400191505060405180910390fd5b600054610100900460ff16158015611777576000805460ff1961ff0019909116610100171660011790555b61177f612328565b6117a282604051806040016040528060018152602001603160f81b8152506123c8565b6117ab82612488565b8015611090576000805461ff00191690555050565b600054610100900460ff16806117d957506117d96116d9565b806117e7575060005460ff16155b6118225760405162461bcd60e51b815260040180806020018281038252602e815260200180612b3f602e913960400191505060405180910390fd5b600054610100900460ff1615801561184d576000805460ff1961ff0019909116610100171660011790555b611855612328565b61185f8383612545565b8015611871576000805461ff00191690555b505050565b600054610100900460ff168061188f575061188f6116d9565b8061189d575060005460ff16155b6118d85760405162461bcd60e51b815260040180806020018281038252602e815260200180612b3f602e913960400191505060405180910390fd5b600054610100900460ff16158015611903576000805460ff1961ff0019909116610100171660011790555b61190b61261d565b801561191d576000805461ff00191690555b50565b6038805460ff191660ff92909216919091179055565b6060825160001415611949575080610ab8565b8251602014156119735761196c61196784600063ffffffff6126ba16565b612713565b9050610ab8565b82806020019051602081101561198857600080fd5b8101908080516040519392919084600160201b8211156119a757600080fd5b9083019060208201858111156119bc57600080fd5b8251600160201b8111828201881017156119d557600080fd5b82525081516020918201929091019080838360005b83811015611a025781810151838201526020016119ea565b50505050905090810190601f168015611a2f5780820380516001836020036101000a031916815260200191505b506040525050509050610ab8565b6000825160001415611a50575080610ab8565b828060200190516020811015611a6557600080fd5b50519050610ab8565b6001600160a01b038316611ab35760405162461bcd60e51b8152600401808060200182810382526025815260200180612c4a6025913960400191505060405180910390fd5b6001600160a01b038216611af85760405162461bcd60e51b81526004018080602001828103825260238152602001806129f36023913960400191505060405180910390fd5b611b03838383611871565b611b4681604051806060016040528060268152602001612a7f602691396001600160a01b038616600090815260336020526040902054919063ffffffff611bc516565b6001600160a01b038085166000908152603360205260408082209390935590841681522054611b7b908263ffffffff611c8f16565b6001600160a01b038084166000818152603360209081526040918290209490945580518581529051919392871692600080516020612c0983398151915292918290030190a3505050565b60008184841115611c545760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611c19578181015183820152602001611c01565b50505050905090810190601f168015611c465780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000610f5c6040518080612b8f6052913960520190506040518091039020611c826127e2565b611c8a6127e8565b6127ee565b600082820183811015610ada576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000611cfd846001600160a01b0316612322565b611d09575060006112d5565b6000846001600160a01b03166388a7ca5c611d226115e9565b8887876040518563ffffffff1660e01b815260040180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611da7578181015183820152602001611d8f565b50505050905090810190601f168015611dd45780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015611df657600080fd5b505af1158015611e0a573d6000803e3d6000fd5b505050506040513d6020811015611e2057600080fd5b50516001600160e01b031916632229f29760e21b14915050949350505050565b6001600160a01b038216611e855760405162461bcd60e51b8152600401808060200182810382526021815260200180612c296021913960400191505060405180910390fd5b611e9182600083611871565b611ed481604051806060016040528060228152602001612a16602291396001600160a01b038516600090815260336020526040902054919063ffffffff611bc516565b6001600160a01b038316600090815260336020526040902055603554611f00908263ffffffff61284416565b6035556040805182815290516000916001600160a01b03851691600080516020612c098339815191529181900360200190a35050565b5490565b6001600160a01b038216611f95576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b611fa160008383611871565b603554611fb4908263ffffffff611c8f16565b6035556001600160a01b038216600090815260336020526040902054611fe0908263ffffffff611c8f16565b6001600160a01b0383166000818152603360209081526040808320949094558351858152935192939192600080516020612c098339815191529281900390910190a35050565b600061203a846001600160a01b0316612322565b61204657506000610ada565b6000846001600160a01b0316637b04a2d061205f6115e9565b86866040518463ffffffff1660e01b815260040180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156120cb5781810151838201526020016120b3565b50505050905090810190601f1680156120f85780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b15801561211957600080fd5b505af115801561212d573d6000803e3d6000fd5b505050506040513d602081101561214357600080fd5b50516001600160e01b0319166307b04a2d60e41b149150509392505050565b600061216c611c5c565b82604051602001808061190160f01b81525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b60006fa2a8918ca85bafe22016d0b997e4df60600160ff1b038211156122055760405162461bcd60e51b8152600401808060200182810382526022815260200180612aa56022913960400191505060405180910390fd5b8360ff16601b148061221a57508360ff16601c145b6122555760405162461bcd60e51b8152600401808060200182810382526022815260200180612b6d6022913960400191505060405180910390fd5b604080516000808252602080830180855289905260ff88168385015260608301879052608083018690529251909260019260a080820193601f1981019281900390910190855afa1580156122ad573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116612310576040805162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b604482015290519081900360640190fd5b95945050505050565b80546001019055565b3b151590565b600054610100900460ff168061234157506123416116d9565b8061234f575060005460ff16155b61238a5760405162461bcd60e51b815260040180806020018281038252602e815260200180612b3f602e913960400191505060405180910390fd5b600054610100900460ff1615801561190b576000805460ff1961ff001990911661010017166001179055801561191d576000805461ff001916905550565b600054610100900460ff16806123e157506123e16116d9565b806123ef575060005460ff16155b61242a5760405162461bcd60e51b815260040180806020018281038252602e815260200180612b3f602e913960400191505060405180910390fd5b600054610100900460ff16158015612455576000805460ff1961ff0019909116610100171660011790555b82516020808501919091208351918401919091206065919091556066558015611871576000805461ff0019169055505050565b600054610100900460ff16806124a157506124a16116d9565b806124af575060005460ff16155b6124ea5760405162461bcd60e51b815260040180806020018281038252602e815260200180612b3f602e913960400191505060405180910390fd5b600054610100900460ff16158015612515576000805460ff1961ff0019909116610100171660011790555b604051806052612ac78239604051908190036052019020609a55508015611090576000805461ff00191690555050565b600054610100900460ff168061255e575061255e6116d9565b8061256c575060005460ff16155b6125a75760405162461bcd60e51b815260040180806020018281038252602e815260200180612b3f602e913960400191505060405180910390fd5b600054610100900460ff161580156125d2576000805460ff1961ff0019909116610100171660011790555b82516125e590603690602086019061295a565b5081516125f990603790602085019061295a565b506038805460ff191660121790558015611871576000805461ff0019169055505050565b600054610100900460ff168061263657506126366116d9565b80612644575060005460ff16155b61267f5760405162461bcd60e51b815260040180806020018281038252602e815260200180612b3f602e913960400191505060405180910390fd5b600054610100900460ff161580156126aa576000805460ff1961ff0019909116610100171660011790555b61190b6301ffc9a760e01b6128a1565b6000816020018351101561270a576040805162461bcd60e51b815260206004820152601260248201527152656164206f7574206f6620626f756e647360701b604482015290519081900360640190fd5b50016020015190565b60408051818152606081810183529182919060208201818036833701905050905060005b60208110156127db57600084826020811061274e57fe5b1a60f881811b9250601080830480831b9360ff9091169091029003901b61277482612925565b85856002028151811061278357fe5b60200101906001600160f81b031916908160001a9053506127a381612925565b8585600202600101815181106127b557fe5b60200101906001600160f81b031916908160001a90535050600190920191506127379050565b5092915050565b60655490565b60665490565b60008383836127fb612956565b6040805160208082019690965280820194909452606084019290925260808301523060a0808401919091528151808403909101815260c090920190528051910120949350505050565b60008282111561289b576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6001600160e01b03198082161415612900576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b031916600090815260cc60205260409020805460ff19166001179055565b6000600a60f883901c1015612945578160f81c60300160f81b9050610a04565b8160f81c60570160f81b9050610a04565b4690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061299b57805160ff19168380011785556129c8565b828001600101855582156129c8579182015b828111156129c85782518255916020019190600101906129ad565b506129d49291506129d8565b5090565b610a9d91905b808211156129d457600081556001016129de56fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f2061646472657373455243313336333a205f636865636b416e6443616c6c417070726f7665207265766572747345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545434453413a20696e76616c6964207369676e6174757265202773272076616c75655065726d69742861646472657373206f776e65722c61646472657373207370656e6465722c75696e743235362076616c75652c75696e74323536206e6f6e63652c75696e7432353620646561646c696e6529455243313336333a205f636865636b416e6443616c6c5472616e736665722072657665727473496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656445434453413a20696e76616c6964207369676e6174757265202776272076616c7565454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e74726163742945524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef45524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220f29d075baa86d3e477390d30f98c9c99e0f0160a7adc8df973960ac5cd6ef54964736f6c634300060b0033'
