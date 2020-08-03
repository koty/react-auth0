import * as React from "react"
// import { IState, IStoreProvider } from "../interface"
import { IState } from "../interface"
import { reducer } from "../reducer"

const initialState: IState = {
  todos: [
    // { id: 1, text: 'testest1', completed: false },
    // { id: 2, text: 'testest2', completed: false },
    // { id: 3, text: 'testest3', completed: false },
    { id: 1, text: 'test1' },
    { id: 2, text: 'test2' },
    { id: 3, text: 'test3' },
  ],
  // visibilityFilter: "SHOW_ALL",
  nextTodoId: 4
};

export const Store = React.createContext<IState | any>(initialState);

export const StoreProvider: React.FC = ({ children }): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  )
}