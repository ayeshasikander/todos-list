import Header from './Components/Header';
import Addtodo from './Components/Addtodo';
import Todos from './Components/Todos';
import Time from './Components/Time';
import Footer from './Components/Footer';
import moment from 'moment';
import { TaskCountProvider } from './Components/Taskcountcontext';
import { useState, useEffect } from 'react';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);
  
  const [taskCount, setTaskCount] = useState(
    Number(localStorage.getItem("taskCount")) || 0
  );
  console.log("Initial taskCount:", taskCount);

  const onDelete = (todo) => {
    console.log("delete me", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
    
    setTaskCount(prevCount => prevCount - 1);
    localStorage.setItem("taskCount", taskCount - 1);
  };

  const addTodo = (title, desc) => {
    console.log("i am add", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      createdAt: moment().toISOString(),
    };
    setTodos([...todos, myTodo]);
    
    setTaskCount(prevCount => prevCount + 1);
    localStorage.setItem("taskCount", taskCount + 1);
    console.log("Updated taskCount:", taskCount + 1);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TaskCountProvider>
      <div className="App">
        <Header title="MyTodosList" />
        <div className='container d-flex'>
          <Addtodo addTodo={addTodo} />
          <Time />
        </div>
        <div className=' container'>
          <Todos todos={todos} onDelete={onDelete} />
        </div>
        <Footer />
      </div>
    </TaskCountProvider>
  );
}

export default App;
