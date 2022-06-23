import React from 'react'

function Todo(){
const tasks = [
    {
        id:1,
        title:"To do 1"
    },
    {
        id:2,
        title:"To do 1"
    },
    {
        id:3,
        title:"To do 1"
    },
    {
        id:4,
        title:"To do 1"
    },
    {
        id:5,
        title:"To do 1"
    }

]

    return(
        <div>
        <div className='heading'>
            <h1>:Todo: </h1>

        </div>
           {
            <ol>
                {tasks.map(items=>(
                    <li id={items.id}><ShowTasks tasks={items}/></li>
                ))}
            </ol>
           }
           <input type='text' placeholder="add a new todo "/><br/>
           <button className='add'>Add</button>
           <button className='update'>Update</button>
           <button className='delete'>Delete</button>
        </div>
    )
}
function ShowTasks({tasks}){
    return(
        <div className='task'>
            {tasks.title}
        </div>
    )
}








export default Todo