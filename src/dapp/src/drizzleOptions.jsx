import Web3 from "web3";
import EmitOracle from "./contracts/EmitOracle.json";

const options = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:8545",
    },
  },
  contracts: [EmitOracle],
  events: {
    EmitOracle: ["evError", "evStoreMessageHash"],
  },
  polls: {
    accounts: 1500,
  },
};

export default options;