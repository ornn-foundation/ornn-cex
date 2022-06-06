import { createContext } from 'react';
import { ContextState, InitialState } from '../@types/context';

export const initialState: InitialState = {
  profile: '',
};

export const Context = createContext<ContextState>({
  state: initialState,
});
