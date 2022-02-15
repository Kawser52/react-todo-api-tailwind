import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todo from './component/Todo/Todo';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import TodoList from './component/TodoList/TodoList';
import TodoDails from './component/TodoDetails/TodoDails';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='' element={<Home></Home>}></Route>
        <Route path='/todo' element={<Todo></Todo>}></Route>
        <Route path ='/home' element={<Home></Home>}></Route>
        <Route path='/todo/:todoID' element={<TodoDails></TodoDails>}></Route>
        <Route path ='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
