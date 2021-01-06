// SPDX-License-Identifier: Apache-2.0

/*
 * Copyright 2020, Offchain Labs, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

pragma solidity ^0.5.11;

// import "arbos-contracts/contracts/ArbERC20.sol";
// import "../rollup/IInbox.sol";
// import "../interfaces/IPairedErc20.sol";
// import "@openzeppelin/contracts/ownership/Ownable.sol";
// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

// contract BaseDetails is ERC20Detailed {
//     /* solhint-disable-next-line no-empty-blocks */
//     constructor() public ERC20Detailed("Token Buddy", "TB", 18) {}
// }

// /* solhint-disable-next-line no-empty-blocks */
// contract ArbBuddyERC20 is ArbERC20, BaseDetails {

// }

// contract EthBuddyERC20 is IPairedErc20, Ownable, ERC20, BaseDetails {
//     constructor() public {
//         _mint(msg.sender, 1000000000000);
//     }

//     function connectToChain(address _chain) public onlyOwner {
//         IInbox inboxCon = IInbox(_chain);
//         inboxCon.deployL2ContractPair(10000000000, 0, 0, type(ArbERC20).creationCode);
//     }

//     function mint(address account, uint256 amount) public {
//         require(inbox == msg.sender, "only callable by global inbox");
//         _mint(account, amount);
//     }

//     function burn(address account, uint256 amount) public {
//         require(inbox == msg.sender, "only callable by global inbox");
//         _burn(account, amount);
//     }
// }
