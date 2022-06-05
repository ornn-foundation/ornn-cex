import { createContext } from 'react';
import { ContextState, InitialState, Mode } from '../@types/context';

export const initialState: InitialState = {
  dark_mode: Mode.light,
};

export const Context = createContext<ContextState>({
  state: initialState,
});
