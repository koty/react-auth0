import React from 'react'
import '../App.css'
import { IStoreProvider, ITodoState } from '../interface'
import { Store } from './Store'
import { Button } from 'antd-mobile'

const App: React.FC = (): JSX.Element => { 
  const { state, dispatch }: IStoreProvider = React.useContext(Store);

  const [value, setValue] = React.useState<string>("");

  const handleSubmit = () => {
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
      <div>
        <input value={value} onChange={e => setValue(e.target.value)} />
        <Button type="primary" onClick={handleSubmit} >Add Todo</Button>
      </div>
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
