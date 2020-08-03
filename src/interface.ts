export interface ITodoState {
  id: number
  text: string
}

export interface IState {
  todos: ITodoState[]
  nextTodoId: number
}

interface IAddTodoAction {
  type: "ADD_TODO"
  payload: { text: string, id: number }
}

export type IActions = IAddTodoAction

export interface IStoreProvider {
  state: IState
  dispatch: React.Dispatch<IActions>
}
