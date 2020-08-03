import React from 'react'
import '../App.css'
import { IStoreProvider, ITodoState } from '../interface';
import { Store } from './Store';

const App: React.FC = (): JSX.Element => { 
  const { state, dispatch }: IStoreProvider = React.useContext(Store);

  const [value, setValue] = React.useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.trim()) return;
    dispatch({
      type: "ADD_TODO",
      payload: {
        id: state.nextTodoId,
        text: value.trim(),
      }
    });
    setValue("");
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={e => setValue(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
      {state.todos.map(
        (todo: ITodoState) => (
          <li key={todo.id}>{todo.text}</li>
        )
      )}
      </ul>
    </div>
  );
}

export default App
