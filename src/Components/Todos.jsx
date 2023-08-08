import React from 'react'
import TodoItem from './TodoItem'
const Todos = (props) => {
  return (

    <div className='style p-3 my-3'>
      <h2 className='text-center my-2 mt-2'>ToDo's List</h2>
      {props.todos.length === 0 ? "No todo work to display" :

        props.todos.map((todo) => {
          return (
            <>
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /><hr />
            </>
          )
        })}

    </div>
  )
}

export default Todos
