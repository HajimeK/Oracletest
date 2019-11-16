import MyConsumer from "./MyConsumer.jsx";
import { drizzleConnect } from 'drizzle-react'

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    EmitOraclt: state.contracts.EmitOracle,
    drizzle: state.drizzle,
    drizzleStatus: state.drizzleStatus
  };
};

const MyContainer = drizzleConnect(MyConsumer, mapStateToProps);

export default MyContainer;
