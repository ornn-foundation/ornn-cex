import { InitialState, Action } from '../@types/context';
import { initialState } from './context';

export const reducer = (
  state: InitialState,
  { type, payload }: Action
): InitialState => {
  switch (type) {
    case 'SET_INITIAL':
      return initialState;
    case 'SET_MODE_TOGGLE':
      return { ...state, dark_mode: payload?.dark_mode };
    default:
      return state;
  }
};
