import React from 'react'
import '../App.css'
import { IStoreProvider, ITodoState } from '../interface'
import { Store } from './Store'
import { Button } from 'antd-mobile'
import { useAuth0 } from '@auth0/auth0-react'

const App: React.FC = (): JSX.Element => { 
  const { state, dispatch }: IStoreProvider = React.useContext(Store)
  const { isAuthenticated, loginWithRedirect, user } = useAuth0()

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
  const handleLogin = () => {
    loginWithRedirect();
  }
  return (
    <div className="App">
      <div>
        {isAuthenticated ? (
          <div>
            <span>{user.nickname}</span>
            <span>{user.email}</span>
            <img src={user.picture} alt="user" />
          </div>
        ) : (
          <div>
            <Button onClick={handleLogin}>Login</Button>
          </div>
        ) }
      </div>
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
