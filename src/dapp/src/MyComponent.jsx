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
    console.log(props);
    //console.log(props);
  }

  componentDidMount() {
    console.log(this.props);
    const { drizzleStatus, EmitOracle, accounts } = this.props;
  }

  handleStoreMessage = e => {
    //console.log('handleRegisterAirline');
    const message = document.getElementById('message');
    //console.log(message.value);
    //console.log(string(accountToRegister));

    const { drizzle, accounts } = this.props;
    //const { accounts } = this.props.drizzleState;
    console.log(drizzle);
    console.log(accounts[0]);

    drizzle.contracts.EmitOracle.methods.storeMessage(
      message.value,
      accounts[0]).send({
        from: accounts[0],
        gas: 4712388,
        gasPrice: 100000000000
      });
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
