import React from "react";
import { AppState, AppAction, appReducer, appInitialState } from "../reducers/app";
import { Auth0Provider } from "@auth0/auth0-react";

export interface AppContextI {
  state?: AppState
  dispatch?: React.Dispatch<AppAction>
}

export const AppContext = React.createContext<AppContextI>({});

interface Props {
  children: any
}

export const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = React.useReducer(appReducer, appInitialState)
  return (
    <Auth0Provider
      domain="ddelizia.eu.auth0.com"
      clientId="opI70qYErsQi4EPLVfN2uIBCgkuX50lc"
      redirectUri={window.location.origin}
      audience="https://ddelizia.eu.auth0.com/api/v2/"
      scope="read:current_user update:current_user_metadata"
    >
      <AppContext.Provider
        value={{
          state,
          dispatch
        }}>
        {children}
      </AppContext.Provider>
    </Auth0Provider>
  );
};
