// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol";

contract whitelistTester is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    uint256 private constant ORACLE_PAYMENT = (1 * LINK_DIVISIBILITY) / 10; // 0.1 * 10**18

    mapping(address => bool) public isWhitelisted;

    event RequestWhitelistInfoFulfilled(
        bytes32 indexed requestId,
        bool indexed price
    );

    /**
     *  Sepolia
     *@dev LINK address in Sepolia network: 0x779877A7B0D9E8603169DdbD7836e478b4624789
     * @dev Check https://docs.chain.link/docs/link-token-contracts/ for LINK address for the right network
     */
    constructor() ConfirmedOwner(msg.sender) {
        // setChainlinkToken(0x779877A7B0D9E8603169DdbD7836e478b4624789); // Sepolia
        setChainlinkToken(0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846); // Fuji
    }

    // Modifier that checks if the user has access
    modifier hasWhitelistAccess() {
        require(isWhitelisted[msg.sender], "Access denied");
        _; // Continue with the function if the user has access
    }

    // Example whitelisted function that requires caller to be whitelisted
    function whitelistedFunction() view public hasWhitelistAccess returns(bool result) {
        return true;
    }

    function requestWhitelistInfo(
        address _oracle,
        string memory _jobId
    ) public onlyOwner {
        Chainlink.Request memory req = buildChainlinkRequest(
            stringToBytes32(_jobId),
            address(this),
            this.fulfillEthereumPrice.selector
        );
        req.add(
            "get",
            createString("http://161.97.84.51:4884/api/isaddresswhitelisted?address=", msg.sender)
        );
        req.add("path", "result");
        req.add("user", toString(msg.sender));
        sendChainlinkRequestTo(_oracle, req, ORACLE_PAYMENT);
    }

    function fulfillEthereumPrice(
        bytes32 _requestId,
        bool _isInWhitelist,
        address _user
    ) public recordChainlinkFulfillment(_requestId) {
        emit RequestWhitelistInfoFulfilled(_requestId, _isInWhitelist);
        isWhitelisted[_user] = _isInWhitelist;
    }

    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }

    function cancelRequest(
        bytes32 _requestId,
        uint256 _payment,
        bytes4 _callbackFunctionId,
        uint256 _expiration
    ) public onlyOwner {
        cancelChainlinkRequest(
            _requestId,
            _payment,
            _callbackFunctionId,
            _expiration
        );
    }

    function stringToBytes32(
        string memory source
    ) private pure returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }

        assembly {
            // solhint-disable-line no-inline-assembly
            result := mload(add(source, 32))
        }
    }

    function createString(string memory str1, address user) internal pure returns (string memory result) {
        return string(abi.encodePacked(str1, toString(user)));
    }

    function toString(address _addr) internal pure returns (string memory) {
        bytes32 value = bytes32(uint256(uint160(_addr)));
        bytes memory alphabet = "0123456789abcdef";

        bytes memory str = new bytes(42);
        str[0] = "0";
        str[1] = "x";
        for (uint256 i = 0; i < 20; i++) {
            str[2 + i * 2] = alphabet[uint8(value[i + 12] >> 4)];
            str[3 + i * 2] = alphabet[uint8(value[i + 12] & 0x0f)];
        }
        return string(str);
    }
}
