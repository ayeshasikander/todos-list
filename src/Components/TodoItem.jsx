import React from 'react'
import moment from 'moment/moment'
const Todo = ({ todo, onDelete }) => {

  return (
    <>
      <div className='d-flex' style={{ justifyContent: "flex-start" }}>
        <div className='mx-4 px-4'>
          <h3>{todo.title}</h3>
          <p>{todo.desc}</p>
        </div>
        <div className='vr'></div>
        <div className='mx-4 px-4'>
          <h3>Created at: </h3>
          <span>{moment(todo.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span>
        </div>
      </div>
      <button className="mt-3 mb-2 btn2  btn-sm " onClick={() => { onDelete(todo) }}>Delete</button>
    </>
  )
}

export default Todo
