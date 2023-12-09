// SPDX-License-Identifier: GPL-3.0
pragma solidity ^ 0.8.17;

interface IHoneypotOracle {
    function pause() external;
    function unpause() external;
    function setHoneypot(address tokenAddress) external;
    function notHoneyPot(address tokenAddress) external;
    function trustToken(address tokenAddress) external;
    function ProtectFromHoneypot(address tokenAddress) external;
    function isHoneypot(address tokenAddress) external view returns (bool);
    function Honeypot(address) external view returns (bool);
    function isTrusted(address, address) external view returns (bool);
}
