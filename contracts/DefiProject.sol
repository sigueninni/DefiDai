// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import "../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DefiProject {
    IERC20 dai;

    constructor(address _daiAddress) {
        dai = IERC20(_daiAddress);
    }

    function foo(address _recipient, uint256 _amount) external {
        dai.transfer(_recipient, _amount);
    }
}
