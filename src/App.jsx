
import React, { useState, useEffect } from 'react';
import "../src/index.css"

function TodoList({ userId }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.log(error));
  }, [userId]);

  return (
    <div>
      <h2>Lista numero : {userId}</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className='listItems'>
      <TodoList className="listItem1" userId={1} />
      <TodoList userId={2} />
      <TodoList userId={3} />
    </div>
  );
}

export default App;

