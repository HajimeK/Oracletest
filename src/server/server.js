import EmitOracle from '../../build/contracts/EmitOracle.json';
import Config from './config.json';
import Web3 from 'web3';
import express from 'express';

let config = Config['localhost'];
let web3 = new Web3(new Web3.providers.WebsocketProvider(config.url.replace('http', 'ws')));
let contract = new web3.eth.Contract(EmitOracle.abi, config.appAddress);
console.log(contract);

contract.events.evHelloOracle(
  {fromBlock: 0},
  function (error, event) {
    console.log("evHelloOracle")
    if (error) {
      console.log("error")
    }
    if (event) {
      console.log("event")
    }
  }
);

const app = express();
app.get('/api', (req, res) => {
    res.send({
      message: 'An API if you want.'
    })
})

export default app;


