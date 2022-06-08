import { Dispatch } from 'react';
import { Styles } from './theme';

export type ActionType = 'SET_INITIAL' | 'SET_STYLES';

export interface Action {
  type: ActionType;
  payload?: InitialState;
}

export interface InitialState {
  styles?: Styles;
  profile?: string;
}

export interface ContextState {
  state: InitialState | null;
  dispatch?: Dispatch<Action>;
}
