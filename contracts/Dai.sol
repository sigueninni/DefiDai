// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import  "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Dai is ERC20{

    constructor() ERC20('Dai stable','DAI'  ){}

    function faucet(address _recipient, uint _amount) external{
        _mint(_recipient, _amount);
    }

}