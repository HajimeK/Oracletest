import React from "react";
import { DrizzleContext } from "drizzle-react";
import MyComponent from './MyComponent.jsx';

export default () => (
  <DrizzleContext.Consumer>
    {drizzleContext => {
     // console.log(drizzleContext);
      const { drizzle, drizzleState, initialized } = drizzleContext;

      if (!initialized) {
        return "Loading...";
      }

      return (
        <MyComponent drizzle={drizzle} drizzleState={drizzleState} initialized={initialized} />
      );
    }}
  </DrizzleContext.Consumer>
)