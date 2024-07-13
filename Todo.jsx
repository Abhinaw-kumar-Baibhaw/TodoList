import { useState } from "react";

export default function Todo(){
    let [todos, setTodos] = useState(["hello","world!"]);
   let [newtodos,setNewTodos]=useState("");
   let addTask = () =>{
      setTodos([...todos,newtodos]); 
      setNewTodos("");
   }

   let updateTodo = (event) => {
            setNewTodos(event.target.value);
   }
    return(
       <>
        <h2>Todo List</h2>
        <input type="text" placeholder="enter input" value={newtodos} onChange={updateTodo}/>
        <br /><br />
        <button onClick={addTask}>Add Task</button>
         <br /><br />
         <hr />TODO TASKS<hr />
         <ol>
           {todos.map((todo)=>(
                <li>{todo}</li>
            ))}
         </ol>
       </>
    );
}