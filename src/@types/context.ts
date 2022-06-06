import { Dispatch } from 'react';

export type ActionType = 'SET_INITIAL' | 'SET_THEME';

export interface Action {
  type: ActionType;
  payload?: InitialState;
}

export interface InitialState {
  profile?: string;
}

export interface ContextState {
  state: InitialState | null;
  dispatch?: Dispatch<Action>;
}
