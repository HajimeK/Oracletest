import React from "react";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Button,
  Grid,
  TextField,
  Typography,
  Paper,
} from '@material-ui/core';


class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    //console.log(props);
    //console.log(props);
  }

  componentDidMount() {
    //mwconsole.log(this.props);
    //const { drizzleStatus, EmitOracle, accounts } = this.props;
  }

  handleStoreMessage = async e => {
    //console.log('handleRegisterAirline');
    const message = document.getElementById('message');
    //console.log(message.value);
    //console.log(string(accountToRegister));

    const { drizzle } = this.props;
    const { accounts } = this.props.drizzleState;
    //const { accounts } = this.props.drizzleState;
    console.log(drizzle);
    console.log(accounts);
    console.log(message.value);
    let hash = drizzle.web3.utils.sha3(message.value);
    console.log(hash);
    let signature = await drizzle.web3.eth.sign(hash, accounts[0]);
    signature = signature.substr(2); //remove 0x
    const r = '0x' + signature.slice(0, 64);
    const s = '0x' + signature.slice(64, 128);
    let v = '0x' + signature.slice(128, 130);
    if (v === '0x00') {
      v = '0x1b';
    } else if (v === '0x01') {
      v = '0x1c';
    }

    console.log("Signature");
    console.log("r: " + r);
    console.log("s: " + s);
    console.log("v: " + v);
    const v_decimal = drizzle.web3.utils.toDecimal(v);
    console.log("v_decimal: " + v_decimal);

    await drizzle.contracts.EmitOracle.methods.storeMessageHash(
      hash,
      v,
      r,
      s)
      .send({
        from: accounts[0],
        gas: 4712388,
        gasPrice: 100000000000
      });
    console.log("sent");
  }

  handleRetrieveMessage = e => {
    console.log('handleRegisterPassenger');
  };

  render() {
    const { drizzle, drizzleStatus, accounts } = this.props;
    //console.log(drizzle);
    return (
      <div className="App">
        <ToastContainer />
        <Paper>
          <div className="section">
            <Typography variant="subtitle1" gutterBottom>Message:</Typography>
            <form autoComplete="off">
              <Grid container direction='row'>
                <Grid item>
                  <TextField id="message" label="message" margin="normal" />
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={this.handleStoreMessage} color="primary">Store</Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Paper >
      </div >
    );
  }
}

export default MyComponent;
