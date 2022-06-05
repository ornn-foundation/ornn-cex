import { Dispatch } from "react";

export type ActionType = 'SET_INITIAL' | 'SET_MODE_TOGGLE';

export interface Action {
  type: ActionType;
  payload?: InitialState;
}

export enum Mode {
  dark = 'dark',
  light = 'light',
}

export interface InitialState {
  dark_mode?: Mode;
}

export interface ContextState {
  state: InitialState | null;
  dispatch?: Dispatch<Action>;
}
