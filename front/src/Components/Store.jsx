import { createContext } from 'react';

export const initialState = {
    todo: { list: [], item: {} },
    groupList: []
  };
  
export default createContext(initialState)
