/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import {
  Contract,
  ContractFactory,
  PayableOverrides,
} from '@ethersproject/contracts'

import type { EthBatchTokenReceiver } from '../EthBatchTokenReceiver'

export class EthBatchTokenReceiver__factory extends ContractFactory {
  constructor(
    linkLibraryAddresses: EthBatchTokenReceiverLibraryAddresses,
    signer?: Signer
  ) {
    super(
      _abi,
      EthBatchTokenReceiver__factory.linkBytecode(linkLibraryAddresses),
      signer
    )
  }

  static linkBytecode(
    linkLibraryAddresses: EthBatchTokenReceiverLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode

    linkedBytecode = linkedBytecode.replace(
      new RegExp('__\\$6bf011c07207fd4b4f621f21ef466e3cdb\\$__', 'g'),
      linkLibraryAddresses['__$6bf011c07207fd4b4f621f21ef466e3cdb$__']
        .replace(/^0x/, '')
        .toLowerCase()
    )

    return linkedBytecode
  }

  deploy(
    _inbox: string,
    _l2Deployer: string,
    _maxSubmissionCost: BigNumberish,
    _maxGas: BigNumberish,
    _gasPrice: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<EthBatchTokenReceiver> {
    return super.deploy(
      _inbox,
      _l2Deployer,
      _maxSubmissionCost,
      _maxGas,
      _gasPrice,
      overrides || {}
    ) as Promise<EthBatchTokenReceiver>
  }
  getDeployTransaction(
    _inbox: string,
    _l2Deployer: string,
    _maxSubmissionCost: BigNumberish,
    _maxGas: BigNumberish,
    _gasPrice: BigNumberish,
    overrides?: PayableOverrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _inbox,
      _l2Deployer,
      _maxSubmissionCost,
      _maxGas,
      _gasPrice,
      overrides || {}
    )
  }
  attach(address: string): EthBatchTokenReceiver {
    return super.attach(address) as EthBatchTokenReceiver
  }
  connect(signer: Signer): EthBatchTokenReceiver__factory {
    return super.connect(signer) as EthBatchTokenReceiver__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EthBatchTokenReceiver {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as EthBatchTokenReceiver
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_inbox',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_l2Deployer',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_maxSubmissionCost',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPrice',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'seqNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'l2Address',
        type: 'address',
      },
    ],
    name: 'DeployBuddyContract',
    type: 'event',
  },
  {
    inputs: [],
    name: 'codeHash',
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
        internalType: 'bytes32',
        name: '_root',
        type: 'bytes32',
      },
    ],
    name: 'distributeBatch',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
    ],
    name: 'finalizeBuddyDeploy',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'inbox',
    outputs: [
      {
        internalType: 'contract IInbox',
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
        internalType: 'uint256',
        name: 'maxSubmissionCost',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'contractInitCode',
        type: 'bytes',
      },
    ],
    name: 'initiateBuddyDeploy',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2Buddy',
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
    inputs: [],
    name: 'l2Connection',
    outputs: [
      {
        internalType: 'enum L1Buddy.L2Connection',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2Deployer',
    outputs: [
      {
        internalType: 'contract BuddyDeployer',
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
        name: 'dest',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'width',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
      {
        internalType: 'bytes32[]',
        name: 'peaks',
        type: 'bytes32[]',
      },
      {
        internalType: 'bytes32[]',
        name: 'siblings',
        type: 'bytes32[]',
      },
    ],
    name: 'redeemWithdrawal',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405260405162001c0d38038062001c0d833981810160405260a08110156200002957600080fd5b508051602080830151604080850151606086015160809096015160008054600180546001600160a01b03808b166001600160a01b0319909216919091179091558616610100026001600160a81b03199091161790559151949592949093620000c3918591859185916200009e908201620004f1565b6020820181038252601f19601f82011660405250620000cf60201b620009351760201c565b505050505050620004ff565b6000600260005460ff166002811115620000e557fe5b14156200012d576040805162461bcd60e51b8152602060048201526011602482015270185b1c9958591e4818dbdb9b9958dd1959607a1b604482015290519081900360640190fd5b600354158062000144575081516020830120600354145b62000196576040805162461bcd60e51b815260206004820152601e60248201527f4f6e6c792072657472792069662073616d65206465706c6f7920636f64650000604482015290519081900360640190fd5b60405160206024820181815284516044840152845160609363658c6a1d60e11b9387939283926064019185019080838360005b83811015620001e3578181015183820152602001620001c9565b50505050905090810190601f168015620002115780820380516001836020036101000a031916815260200191505b5060408051601f19818403018152919052602080820180516001600160e01b03166001600160e01b031990971696909617909552875188860120600381905560005491965062000283956001600160a01b03610100909304929092169450309350915062000f446200047a821b17901c565b600280546001600160a01b0319166001600160a01b0392909216919091179055600080546001919060ff1916828002179055506000600160009054906101000a90046001600160a01b03166001600160a01b031663679b6ded34600060019054906101000a90046001600160a01b031660008b33338d8d8b6040518a63ffffffff1660e01b815260040180896001600160a01b03166001600160a01b03168152602001888152602001878152602001866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015620003a95781810151838201526020016200038f565b50505050905090810190601f168015620003d75780820380516001836020036101000a031916815260200191505b5099505050505050505050506020604051808303818588803b158015620003fd57600080fd5b505af115801562000412573d6000803e3d6000fd5b50505050506040513d60208110156200042a57600080fd5b5051600254604080516001600160a01b0390921682525191925082917fa4ecfc4590bc6dc48c2533a8826bc2d61903cf3febf621d6d17202f68023c18f9181900360200190a29695505050505050565b604080517fff000000000000000000000000000000000000000000000000000000000000006020808301919091526001600160601b0319606087901b1660218301526001600160a01b0385166035830152605580830185905283518084039091018152607590920190925280519101209392505050565b6106c4806200154983390190565b61103a806200050f6000396000f3fe6080604052600436106100765760003560e01c806306cad3381461007b57806318edaaf2146100a95780634caa1a75146100d0578063580d8455146101015780635ca00351146102525780635cccb974146103095780639861c66314610333578063a43229801461036c578063fb0e722b14610381575b600080fd5b34801561008757600080fd5b506100a76004803603602081101561009e57600080fd5b50351515610396565b005b3480156100b557600080fd5b506100be6105a5565b60408051918252519081900360200190f35b3480156100dc57600080fd5b506100e56105ab565b604080516001600160a01b039092168252519081900360200190f35b34801561010d57600080fd5b506100a7600480360360c081101561012457600080fd5b6001600160a01b038235169160208101359160408201359160608101359181019060a081016080820135600160201b81111561015f57600080fd5b82018360208201111561017157600080fd5b803590602001918460208302840111600160201b8311171561019257600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156101e157600080fd5b8201836020820111156101f357600080fd5b803590602001918460208302840111600160201b8311171561021457600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506105ba945050505050565b6100be6004803603608081101561026857600080fd5b81359160208101359160408201359190810190608081016060820135600160201b81111561029557600080fd5b8201836020820111156102a757600080fd5b803590602001918460018302840111600160201b831117156102c857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610935945050505050565b34801561031557600080fd5b506100a76004803603602081101561032c57600080fd5b5035610cc8565b34801561033f57600080fd5b50610348610f18565b6040518082600281111561035857fe5b60ff16815260200191505060405180910390f35b34801561037857600080fd5b506100e5610f21565b34801561038d57600080fd5b506100e5610f35565b600160005460ff1660028111156103a957fe5b146103e55760405162461bcd60e51b8152600401808060200182810382526021815260200180610fe46021913960400191505060405180910390fd5b600154604080516373c6754960e11b815290516000926001600160a01b03169163e78cea92916004808301926020929190829003018186803b15801561042a57600080fd5b505afa15801561043e573d6000803e3d6000fd5b505050506040513d602081101561045457600080fd5b50516040805163ab5d894360e01b815290516001600160a01b039092169163ab5d894391600480820192602092909190829003018186803b15801561049857600080fd5b505afa1580156104ac573d6000803e3d6000fd5b505050506040513d60208110156104c257600080fd5b505160005460408051634032458160e11b815290519293506001600160a01b03610100909204821692918416916380648b0291600480820192602092909190829003018186803b15801561051557600080fd5b505afa158015610529573d6000803e3d6000fd5b505050506040513d602081101561053f57600080fd5b50516001600160a01b0316146105865760405162461bcd60e51b8152600401808060200182810382526022815260200180610fc26022913960400191505060405180910390fd5b811561059957610594610fa8565b6105a1565b6105a1610fb0565b5050565b60035481565b6002546001600160a01b031681565b600454610600576040805162461bcd60e51b815260206004820152600f60248201526e1393d517d253925512505312569151608a1b604482015290519081900360640190fd5b60008381526006602052604090205460ff1615610657576040805162461bcd60e51b815260206004820152601060248201526f1053149150511657d49151115153515160821b604482015290519081900360640190fd5b6000838152600660209081526040808320805460ff1916600117905560045481516001600160a01b038b16818501528083018a9052825180820384018152606082019384905263265f6e0160e21b90935260648101828152608482018a905260a4820189905260c060c483019081528451610124840152845173__$6bf011c07207fd4b4f621f21ef466e3cdb$__9763997db8049795968d968d9691958d958d959194909360e481019361010482019361014490920192908a0191908190849084905b8381101561073257818101518382015260200161071a565b50505050905090810190601f16801561075f5780820380516001836020036101000a031916815260200191505b508481038352865181528651602091820191808901910280838360005b8381101561079457818101518382015260200161077c565b50505050905001848103825285818151815260200191508051906020019060200280838360005b838110156107d35781810151838201526020016107bb565b50505050905001995050505050505050505060206040518083038186803b1580156107fd57600080fd5b505af4158015610811573d6000803e3d6000fd5b505050506040513d602081101561082757600080fd5b5051151560011461086b576040805162461bcd60e51b81526020600482015260096024820152682120a22fa82927a7a360b91b604482015290519081900360640190fd5b6005546040805163a9059cbb60e01b81526001600160a01b038981166004830152602482018990529151919092169163a9059cbb9160448083019260209291908290030181600087803b1580156108c157600080fd5b505af11580156108d5573d6000803e3d6000fd5b505050506040513d60208110156108eb57600080fd5b505161092d576040805162461bcd60e51b815260206004820152600c60248201526b2120a22faa2920a729a322a960a11b604482015290519081900360640190fd5b505050505050565b6000600260005460ff16600281111561094a57fe5b1415610991576040805162461bcd60e51b8152602060048201526011602482015270185b1c9958591e4818dbdb9b9958dd1959607a1b604482015290519081900360640190fd5b60035415806109a7575081516020830120600354145b6109f8576040805162461bcd60e51b815260206004820152601e60248201527f4f6e6c792072657472792069662073616d65206465706c6f7920636f64650000604482015290519081900360640190fd5b60405160206024820181815284516044840152845160609363658c6a1d60e11b9387939283926064019185019080838360005b83811015610a43578181015183820152602001610a2b565b50505050905090810190601f168015610a705780820380516001836020036101000a031916815260200191505b5060408051601f19818403018152919052602080820180516001600160e01b03166001600160e01b0319909716969096179095528751948801949094206003819055600054949550610ad7946001600160a01b036101009091041693503092509050610f44565b600280546001600160a01b0319166001600160a01b0392909216919091179055600080546001919060ff1916828002179055506000600160009054906101000a90046001600160a01b03166001600160a01b031663679b6ded34600060019054906101000a90046001600160a01b031660008b33338d8d8b6040518a63ffffffff1660e01b815260040180896001600160a01b03166001600160a01b03168152602001888152602001878152602001866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610bfb578181015183820152602001610be3565b50505050905090810190601f168015610c285780820380516001836020036101000a031916815260200191505b5099505050505050505050506020604051808303818588803b158015610c4d57600080fd5b505af1158015610c61573d6000803e3d6000fd5b50505050506040513d6020811015610c7857600080fd5b5051600254604080516001600160a01b0390921682525191925082917fa4ecfc4590bc6dc48c2533a8826bc2d61903cf3febf621d6d17202f68023c18f9181900360200190a29695505050505050565b600260005460ff166002811115610cdb57fe5b14610d1d576040805162461bcd60e51b815260206004820152600d60248201526c139bdd0818dbdb9b9958dd1959609a1b604482015290519081900360640190fd5b6002546001600160a01b0316610d6d576040805162461bcd60e51b815260206004820152601060248201526f1b0c88189d59191e481b9bdd081cd95d60821b604482015290519081900360640190fd5b600154604080516373c6754960e11b815290516000926001600160a01b03169163e78cea92916004808301926020929190829003018186803b158015610db257600080fd5b505afa158015610dc6573d6000803e3d6000fd5b505050506040513d6020811015610ddc57600080fd5b50516040805163ab5d894360e01b815290516001600160a01b039092169163ab5d894391600480820192602092909190829003018186803b158015610e2057600080fd5b505afa158015610e34573d6000803e3d6000fd5b505050506040513d6020811015610e4a57600080fd5b505160408051634032458160e11b815290519192506001600160a01b038316916380648b0291600480820192602092909190829003018186803b158015610e9057600080fd5b505afa158015610ea4573d6000803e3d6000fd5b505050506040513d6020811015610eba57600080fd5b50516002546001600160a01b03908116911614610f12576040805162461bcd60e51b81526020600482015260116024820152704e6f742066726f6d206c3220627564647960781b604482015290519081900360640190fd5b50600455565b60005460ff1681565b60005461010090046001600160a01b031681565b6001546001600160a01b031681565b604080516001600160f81b03196020808301919091526bffffffffffffffffffffffff19606087901b1660218301526001600160a01b0385166035830152605580830185905283518084039091018152607590920190925280519101209392505050565b610fb0610fb2565b565b6000805460ff1916600217905556fe57726f6e67204c3220616464726573732074726967676572696e67206f7574626f78436f6e6e656374696f6e206e6f7420696e20696e69746961746564207374617465a264697066735822122027cf4b8650c150520cc00b9a0e4ec73a7d49fdcdc922aabebd3f786b300007ca64736f6c634300060b0033608060405234801561001057600080fd5b506106a4806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063733490d01461003b578063d5d683a414610045575b600080fd5b610043610062565b005b6100436004803603602081101561005b57600080fd5b50356104af565b6005544310156100a4576040805162461bcd60e51b81526020600482015260086024820152672a27a7afa9a7a7a760c11b604482015290519081900360640190fd5b6006546040805163c2eeeebd60e01b815290516000926001600160a01b03169163c2eeeebd916004808301926020929190829003018186803b1580156100e957600080fd5b505afa1580156100fd573d6000803e3d6000fd5b505050506040513d602081101561011357600080fd5b505160408051633148b9ef60e21b815260006004820152905191925060649163928c169a91309173__$6bf011c07207fd4b4f621f21ef466e3cdb$__9163c522e7bc916024808301926020929190829003018186803b15801561017557600080fd5b505af4158015610189573d6000803e3d6000fd5b505050506040513d602081101561019f57600080fd5b5051604080516024808201939093526001600160a01b03808816604480840191909152835180840382018152606493840185526020810180516001600160e01b0316630c9fb1e560e11b178152855160e08a901b6001600160e01b031916815293881660048501908152968401958652815192840192909252805190959493929092019180838360005b83811015610241578181015183820152602001610229565b50505050905090810190601f16801561026e5780820380516001836020036101000a031916815260200191505b509350505050602060405180830381600087803b15801561028e57600080fd5b505af11580156102a2573d6000803e3d6000fd5b505050506040513d60208110156102b857600080fd5b5050600754600654604080516370a0823160e01b8152306004820181905291516001600160a01b039485169463d2ce7d65948794939116916370a0823191602480820192602092909190829003018186803b15801561031657600080fd5b505afa15801561032a573d6000803e3d6000fd5b505050506040513d602081101561034057600080fd5b5051604080516001600160e01b031960e087901b1681526001600160a01b03948516600482015292909316602483015260448201526000606482018190526084820181905260c060a4830152600260c483015261060f60f31b60e48301529151610104808301939282900301818387803b1580156103bd57600080fd5b505af11580156103d1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405260208110156103fa57600080fd5b810190808051604051939291908464010000000082111561041a57600080fd5b90830190602082018581111561042f57600080fd5b825164010000000081118282018810171561044957600080fd5b82525081516020918201929091019080838360005b8381101561047657818101518382015260200161045e565b50505050905090810190601f1680156104a35780820380516001836020036101000a031916815260200191505b50604052503392505050ff5b600654604080516323b872dd60e01b81523360048201523060248201526044810184905290516001600160a01b03909216916323b872dd916064808201926020929091908290030181600087803b15801561050957600080fd5b505af115801561051d573d6000803e3d6000fd5b505050506040513d602081101561053357600080fd5b5051610578576040805162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b604482015290519081900360640190fd5b604080513360208083019190915281830184905282518083038401815260608301808552637319a76f60e11b905260006064840181815260848501958652825160a4860152825173__$6bf011c07207fd4b4f621f21ef466e3cdb$__9663e6334ede9693959293909260c49091019190850190808383895b838110156106085781810151838201526020016105f0565b50505050905090810190601f1680156106355780820380516001836020036101000a031916815260200191505b50935050505060006040518083038186803b15801561065357600080fd5b505af4158015610667573d6000803e3d6000fd5b505050505056fea2646970667358221220e386575eaa0b868bcf4d9ca31262d48533f2d38c68a80d206addf74268c4d85a64736f6c634300060b0033'

export interface EthBatchTokenReceiverLibraryAddresses {
  ['__$6bf011c07207fd4b4f621f21ef466e3cdb$__']: string
}
