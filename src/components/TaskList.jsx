import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTask,updateTask } from "../redux/task";
import { Modal, Button, Form } from 'react-bootstrap';
import UpdateTask from "./UpdateTask";
import './TaskList.css'



const TaskList = () => {
  const { taskList } = useSelector((state) => state.task);
  const dispatch = useDispatch();

 
 
  console.log(taskList, "taskList");
  return (
    <div className="task-list-container">
      {taskList.map((task, key) => {
        return (
          <div className="task" key={key}>
            <h1>{task.task}</h1>
            <Button className="danger" onClick={() => dispatch(removeTask(task.id))}>
              Delete
            </Button>
           <UpdateTask id={task.id} task={task.task}/>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
