pragma solidity >=0.5.0 <0.6.0;

contract EmitOracle {
    event evError();
    event evStoreMessageHash(address, bytes32);
    function storeMessageHash(
            bytes32 msgHash,
            uint8 v,
            bytes32 r,
            bytes32 s)
        external
    {
        bytes memory garbagePrefix = "\x19Ethereum Signed Message:\n32";
        bytes32 hash = keccak256(
            abi.encodePacked(
                garbagePrefix,
                msgHash));
        address addr = ecrecover(hash, v, r, s);
        //emit evRecoveredAddress(addr);
        if (addr == msg.sender) {
            emit evStoreMessageHash(addr, msgHash);
        } else {
            emit evError();
        }
    }
}
