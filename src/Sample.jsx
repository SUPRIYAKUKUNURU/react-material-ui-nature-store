import React ,{useState} from 'react';
import { Button, TextField, Typography,ListItem,List } from '@mui/material';

const Sample = () => {
    const [task,setTask] = useState("");
    const [ todos,setTodos] = useState([]);

    const handleSubmit = ()=>{
        if(task.trim() === "") return;

        const today = new 
        Date().toLocaleDateString();
        const newTodo = {task,date:today};
        setTodos([...todos, newTodo]); // ✅ This adds the new task to the list properly
        setTask("");
    };



return(
    <>
    <div >
        <Typography>
            Todo App
        </Typography>

        <TextField
        label =" Enter  a task"
        value = {task}
        onChange={(e)=>setTask(e.target.value)}
        />
            <Button  variant = "contained" onClick = {handleSubmit}>Submit</Button>
            <List sx={{mt:3}}>
                {todos.map((todo,index)=>(
                    <ListItem key ={index}>
                        {todo.task}-<strong >{todo.date}</strong>
                    </ListItem>
                ))}
            </List>
    </div>
    </>
);
};
export default Sample;