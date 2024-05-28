import React, { useEffect, useState } from 'react';

export default function EffectIndividual() { 
    const [postId, setPostId] = useState(1);
    const [data, setData] = useState({});
    const [show, setShow] = useState(false);

    useEffect(() => { 
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log(error));
        return () => { 
            console.log('Previous postId:', postId.toString());
        }
    }, [postId]);

    const handleChange = (event) => { 
        let postId = event.target.value;
        if (postId < 1 || postId > 100)
            console.log("Out of boundaries");
        else
            setPostId(postId);
    }
    const handleClick = (event) => {
        setShow(true);
        setTimeout(() => setShow(prev => false), 2000);
    };
        
    return (
        <>
            Post
            <input type="number" value={postId} onChange={handleChange} placeholder='Insert a post Id' />
            <button onClick={handleClick} disabled={show}>Click</button>
            {show && <p className='p'>{ data.userId}, {data.title}</p>}
        </>
    );

}