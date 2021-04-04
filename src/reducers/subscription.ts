import { Reducer } from "react";

export type SubscriptionAction =
  | {
    type: 'SELECT_PLAN',
    payload: {
      plan: string,
    },
  }
  | {
    type: 'SUBMIT_SUBSCRIPTION',
  };

export interface SubscriptionState {
  selectedPlan?: string
}

export const subscriptionInitialState: SubscriptionState = {
  selectedPlan: undefined
}

export type SubscriptionReducerFuncType = Reducer<SubscriptionState, SubscriptionAction>

export const subscriptionReducer: SubscriptionReducerFuncType = (state: SubscriptionState, action: SubscriptionAction): SubscriptionState => {
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