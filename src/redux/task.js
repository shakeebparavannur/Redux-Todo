import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE={
    taskList:[]
}

const taskSlice = createSlice({
    name:"task",
    initialState:INIT_STATE,
    reducers:{
        addTask:(state,action)=>{
            const newTask = {
                id:state.taskList.length+1,
                task:action.payload
            }
            state.taskList.push(newTask)
        },
        removeTask:(state,action)=>{
            const taskId = action.payload;
            state.taskList = state.taskList.filter((task)=>task.id !== taskId)
        },
        updateTask:(state,action)=>{
            const {id,updatedTask} = action.payload
            const task = state.taskList.find((task)=>task.id === id)
            if(task){
                task.task=updatedTask;
            }
        }
    }
}
)

export const{addTask,removeTask,updateTask} = taskSlice.actions;

export default taskSlice.reducer;