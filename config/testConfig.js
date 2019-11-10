var EmitOracle = artifacts.require("EmitOracle");
//var FlightSuretyData = artifacts.require("FlightSuretyData");

var Config = async function (accounts) {

    // These test addresses are useful when you need to add
    // multiple users in test scripts
    let testAddresses = [
        "0x5268f2232368ddba43541aa7a16a9c569d0f9d4f",
        "0x1598cf27b2d63e17fa30ce9cdac39835a600f3aa",
        "0x4abfe47b1a8ae6e6b081726b91f3430476ac6c78",
        "0x2ed5c2f4bc12f1b9cd4264ac7f59e92885232b8b",
        "0xa2a8290cd545e90fa43adb97021c684a64016080",
        "0x2a5bcd0e81c099ba976af542cfebff7f2b6815cc",
        "0x3a5a783487a9e7d2e777c653fbc4be028a47d2fa",
        "0xa6c698cf4d8d321659f29b5312908d96c298a3fc",
        "0xc5dee7131510aa7058728f156880b82842ef8ac5",
        "0x59dca29de60ecf413342f921dcf7922007beb2b3"
    ];

    let owner = testAddresses[0];

    let emitOracle = await EmitOracle.new({ from: owner });


    return {
        owner: owner,
        testAddresses: testAddresses,
        //flightSuretyData: flightSuretyData,
        emitOracle: emitOracle
    }
}

module.exports = {
    Config: Config
};