import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [post, setPost] = useState({})
  const [id, setId] = useState(1)

  useEffect(() => {
    fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(res => setPost(res))
  }, [id])


  return (
    <div className="App">
     <h1>{post.title}</h1>
     <p>{post.body}</p>
     <button onClick={() => setId(id + 1)}>+ 1</button>
    </div>
  );
}

export default App;
