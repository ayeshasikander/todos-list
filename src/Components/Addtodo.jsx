import React, { useState } from 'react'

const Addtodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description not be blank");
        }
        else {
            props.addTodo(title, desc);
            setTitle("")
            setDesc("")
        }
    }
    return (
        <div className='style col-6 p-3 my-3'>
            <h2 className='text-center'>Add todo's</h2>
            <form onSubmit={submit}>
                <div className="fix2 mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="fix2 mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <textarea type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>
    
                <button type="submit" className="btn2 btn-sm">Add Todo</button>
            </form>
        </div>
    )
}
export default Addtodo