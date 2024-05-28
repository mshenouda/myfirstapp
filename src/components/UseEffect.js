import React, { useEffect, useState } from "react";
import "./style.css";

function Effect() { 
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.log(error));
    }, []);
    
    return (
        <>
            <h1>Users Details : {users.length}</h1>
            <ul className='ul'>
                {users.map((user, index) => {
                    const { name, catchPhrase, bs } =  user.company;
                    return <li key={index}>{user.username}, {user.name}, {user.email}
                        <ol className="li">
                            <li>{name}</li>
                            <li>{catchPhrase}</li>
                            <li>{bs}</li>
                        </ol>
                    </li>;
                })}
            </ul>

        </>
    );
}
export default Effect;