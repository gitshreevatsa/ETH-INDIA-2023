// SPDX-License-Identifier: GPL-3.0

pragma solidity  ^ 0.8.19; 
import "@openzeppelin/contracts/access/Ownable.sol";

contract HoneypotOracle is Ownable
{

mapping (address =>bool) public Honeypot;
mapping(address => mapping(address => bool)) public isTrusted;

     constructor() Ownable(msg.sender) {
 
    }

function setHoneypot(address tokenAddress) public onlyOwner
{
    Honeypot[tokenAddress]=true;
}
function notHoneyPot(address tokenAddress) public onlyOwner
{
    Honeypot[tokenAddress]=false;
}
function trustToken(address tokenAddress) public
{
    require(Honeypot[tokenAddress],"this is a trusted token");
    isTrusted[msg.sender][tokenAddress]=true;
}

modifier ProtectFromHoneypot(address tokenAddress) {
        require(!(Honeypot[tokenAddress])||isTrusted[msg.sender][tokenAddress],"Please stay away from this token");
        _;
    }
function isHoneypot(address tokenAddress) public view returns (bool) {
    return Honeypot[tokenAddress];
}

}