import { IState, IActions } from "./interface";

export const reducer = (state: IState, action: IActions): IState => {
  switch (action.type) {
    case "ADD_TODO":
      console.log('add todo', action)
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            text: action.payload.text,
          }
        ],
        nextTodoId: state.nextTodoId + 1
      }
    default:
      return state;
  }
}
