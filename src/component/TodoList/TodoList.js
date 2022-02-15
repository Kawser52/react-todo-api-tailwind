import React from 'react';
import { useNavigate } from 'react-router-dom';

const TodoList = (props) => {
    const {userId, id,title,completed} = props.todo;
    const navigate = useNavigate();
    const handleTodoDetails=()=>{
        navigate(`/todo/${id}`);
    }
    let comp;
    if(completed){
        comp = <p>Completed</p>
    } else {
        comp = <p>Not Complete</p>
    }
    return (
        <div className='todo'>
            <div className="bg-white m-5 p-3 rounded-lg">
                <div className='flex justify-between'>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <p className='px-5 py-1 rounded-3xl font-bold text-center bg-green-100 text-green-500 flex justify-center items-center'>{comp}</p>
                </div>
                <div className='mx-auto text-center'>
                 <button onClick={handleTodoDetails} className="rounded-full bg-red-100 text-red-500 px-5 py-1 font-bold mt-7">Details</button>
                </div>
                
            </div>
            
        </div>
    );
};

export default TodoList;