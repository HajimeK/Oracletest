import EmitOracle from '../dapp/src/contracts/EmitOracle.json';
import Config from './config.json';
import Web3 from 'web3';
import express from 'express';

let config = Config['localhost'];
let web3 = new Web3(new Web3.providers.WebsocketProvider(config.url.replace('http', 'ws')));
let contract = new web3.eth.Contract(EmitOracle.abi, config.appAddress);
console.log(contract);

const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
  //  Create tables
  //    Flights {flightKey, status}
});

contract.events.evStoreMessageHash(
  {fromBlock: 0},
  function (error, event) {
    console.log(event)
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