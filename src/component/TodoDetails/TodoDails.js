import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TodoDails = () => {
    const {todoID} = useParams();
    const [tododet, setTododet] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${todoID}`)
        .then(res => res.json())
        .then(data=>setTododet(data))
    },[])
    return (
        <div>
            <h1 className='text-center mx-auto'>{tododet.title}</h1>
           
        </div>
    );
};

export default TodoDails;