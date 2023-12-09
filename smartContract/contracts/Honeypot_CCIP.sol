// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {IRouterClient} from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import {OwnerIsCreator} from "@chainlink/contracts-ccip/src/v0.8/shared/access/OwnerIsCreator.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {LinkTokenInterface} from "@chainlink/contracts/src/v0.8/shared/interfaces/LinkTokenInterface.sol";
import {CCIPReceiver} from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";
contract HoneypotOracle is OwnerIsCreator,CCIPReceiver  {
    error NotEnoughBalance(uint256 currentBalance, uint256 calculatedFees);
    event BroadcastHoneypot(
        bytes32 indexed messageId,
        uint64 indexed destinationChainSelector,
        address receiver,
        address text,
        address feeToken,
        uint256 fees
    );
  event RecieveBroadcast(
        bytes32 indexed messageId,
        uint64 indexed sourceChainSelector,
        address sender, 
        address text 
    );

    bytes32 private s_lastReceivedMessageId; 
    string private s_lastReceivedText;
    IRouterClient private s_router;
    LinkTokenInterface private s_linkToken;

    constructor(address _router, address _link)CCIPReceiver(_router) {
        s_router = IRouterClient(_router);
        s_linkToken = LinkTokenInterface(_link);
    }

    mapping (address => bool) public Honeypot;
    mapping(address => mapping(address => bool)) public isTrusted;

    function setHoneypot(address tokenAddress) public {
        Honeypot[tokenAddress] = true;
    }

    function notHoneyPot(address tokenAddress) public {
        Honeypot[tokenAddress] = false;
    }

    function trustToken(address tokenAddress) public {
        require(Honeypot[tokenAddress], "this is a trusted token");
        isTrusted[msg.sender][tokenAddress] = true;
    }

    modifier ProtectFromHoneypot(address tokenAddress) {
        require(!(Honeypot[tokenAddress]) || isTrusted[msg.sender][tokenAddress], "Please stay away from this token");
        _;
    }

    function isHoneypot(address tokenAddress) public view returns (bool) {
        return Honeypot[tokenAddress];
    }

    function InterstellarShout(uint64 destinationChainSelector, address receiver, address token) external onlyOwner returns (bytes32 messageId) {
        Client.EVM2AnyMessage memory evm2AnyMessage = Client.EVM2AnyMessage({
            receiver: abi.encode(receiver),
            data: abi.encode(token),
            tokenAmounts: new Client.EVMTokenAmount[](0),
            extraArgs: Client._argsToBytes(Client.EVMExtraArgsV1({gasLimit: 200_000})),
            feeToken: address(s_linkToken)
        });

        uint256 fees = s_router.getFee(destinationChainSelector, evm2AnyMessage);

        if (fees > s_linkToken.balanceOf(address(this)))
            revert NotEnoughBalance(s_linkToken.balanceOf(address(this)), fees);

        s_linkToken.approve(address(s_router), fees);

        messageId = s_router.ccipSend(destinationChainSelector, evm2AnyMessage);

        emit BroadcastHoneypot(messageId, destinationChainSelector, receiver, token, address(s_linkToken), fees);

        return messageId;
    }

    function _ccipReceive(
        Client.Any2EVMMessage memory any2EvmMessage
    ) internal override {
         s_lastReceivedMessageId = any2EvmMessage.messageId;
    s_lastReceivedText = abi.decode(any2EvmMessage.data, (string));
    address honey = abi.decode(any2EvmMessage.data, (address));
    Honeypot[honey] = true;
        emit RecieveBroadcast(
            any2EvmMessage.messageId,
            any2EvmMessage.sourceChainSelector,
            abi.decode(any2EvmMessage.sender, (address)), 
            abi.decode(any2EvmMessage.data, (address))
        );
    }
}
