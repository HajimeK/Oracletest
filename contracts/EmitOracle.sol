pragma solidity >=0.5.0 <0.6.0;

contract EmitOracle {
    event evHelloOracle(string _message);

    function helloOracle()
        external
    {
        bytes memory b = new bytes(20);
        for (uint i = 0; i < 20; i++)
            b[i] = byte(uint8(uint(msg.sender) / (2**(8*(19 - i)))));

        emit evHelloOracle(string(b));
    }
}
