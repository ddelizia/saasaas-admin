import React from "react";
import { SubscriptionState, SubscriptionAction, subscriptionReducer, subscriptionInitialState, SubscriptionReducerFuncType } from "../reducers/subscription";

export interface SubscriptionContextI {
  state?: SubscriptionState
  dispatch?: React.Dispatch<SubscriptionAction>
}

export const SubscriptionContext = React.createContext<SubscriptionContextI>({});


interface Props {
  children: any
}

export const SubscriptionProvider = ({ children }: Props) => {
  const [state, dispatch] = React.useReducer(subscriptionReducer, subscriptionInitialState)
  return (
    <SubscriptionContext.Provider
      value={{
        state,
        dispatch
      }}>
      { children}
    </SubscriptionContext.Provider>
  );
};
