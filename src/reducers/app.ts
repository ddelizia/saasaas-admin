import { Reducer } from "react";

export type AppAction =
  | {
    type: 'SELECT_PLAN',
    payload: {
      plan: string,
    },
  }
  | {
    type: 'SUBMIT_SUBSCRIPTION',
  };

export interface AppState {
  selectedPlan?: string
}

export const appInitialState: AppState = {
  selectedPlan: undefined
}

export type AppReducerFuncType = Reducer<AppState, AppAction>

export const appReducer: AppReducerFuncType = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SELECT_PLAN':
      return {
        ...state,
        selectedPlan: action.payload.plan
      };
    case 'SUBMIT_SUBSCRIPTION':
      return {
        ...state,
      };
    default:
      return state
  }
}