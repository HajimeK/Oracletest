const EmitOracle = artifacts.require("EmitOracle");
const fs = require('fs');

module.exports = function(deployer) {

    deployer.deploy(EmitOracle)
    .then(() => {{
                    let config = {
                        localhost: {
                            url: 'http://localhost:8545',
                            appAddress: EmitOracle.address
                        }
                    }
                    fs.writeFileSync(__dirname + '/../src/dapp/src/config.json',JSON.stringify(config, null, '\t'), 'utf-8');
                    fs.writeFileSync(__dirname + '/../src/server/config.json',JSON.stringify(config, null, '\t'), 'utf-8');
                }});
}