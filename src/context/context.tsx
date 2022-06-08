import { createContext } from 'react';
import { ContextState, InitialState } from '../@types/context';
import { Mode } from '../@types/theme';
import { theme } from '../utils';

export const initialState: InitialState = {
  styles: {
    mode: Mode.light,
    color: theme(),
  },
  profile: '',
};

export const Context = createContext<ContextState>({
  state: initialState,
});
