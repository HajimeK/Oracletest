var Test = require('../config/testConfig.js');
//var BigNumber = require('bignumber.js');


contract('Oracles', async (accounts) => {

    var config;
    before('setup contract', async () => {
        config = await Test.Config(accounts);
    });


    it('emit event', async () => {
        await config.emitOracle.helloOracle().then((result) => {
            console.log(result);
        });
    })
})