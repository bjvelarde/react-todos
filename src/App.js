import TodoList from './components/ToDoList';
import Filter from './components/Filter';
import NewToDo from './components/NewToDo';
import { Provider } from './context';
import './App.css';

function App() {
  return (
    <Provider>
      <div className="App">
        <h1>My To Do List</h1>
        <Filter />
        <NewToDo />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
