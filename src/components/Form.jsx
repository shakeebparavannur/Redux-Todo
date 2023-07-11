import React from 'react'
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../redux/task';
import './Form.css'


const Form = () => {
    const {taskList} = useSelector((state) =>state.task);
    const dispatch = useDispatch()
    const taskRef = useRef(null)
    console.log(taskList);
    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(addTask( taskRef.current.value))
        taskRef.current.value=''
    }
  return (
    <div className='form-container'>
        <h1>Enter the Task to do</h1>
        <form onSubmit={handleSubmit}>
            <input required type="text" ref={taskRef}/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form