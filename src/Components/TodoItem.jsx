import React from 'react'
import moment from 'moment/moment'
const Todo = ({ todo, onDelete }) => {

  return (
    <>
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
      <div className='my-4'>
        <h3>Created at: </h3>
        <span>{moment(todo.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span>
      </div>
      <button className="btn2  btn-sm " onClick={() => { onDelete(todo) }}>Delete</button>
    </>
  )
}

export default Todo
