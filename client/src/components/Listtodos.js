import React, {Fragment, useEffect, useState} from "react";
import EditTodo from "./EditTodo.js";

const ListTodos = () => {
  
  const [todos, setTodos] = useState([]);
  
  //delete todo
  const deleteTodo = async(id) => {
    try {
      
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`,
      {
        method: "DELETE"
      });
      
      setTodos(todos.filter(todo => todo.todo_id !== id)); //returns the todos that don't match the id of the one deleted
      
    } catch (err) {
      console.log(err.message);
    }
  };
  
  const getTodos = async() => {
    try {
      
      const response = await fetch("http://localhost:5000/todos"); //default fetch is get request
      const jsonData = await response.json();
      
      setTodos(jsonData);
      
    } catch (err) {
      console.log(err.message);
    }
  };
  
  useEffect(() => {
    getTodos();
  }, []); //using [] forces useEffect to make only one request
  
  return(
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {/*<tr>
          <td>John</td>
          <td>Doe</td>
          <td>john@example.com</td>
        </tr>*/}
        {todos.map(todo => (
          <tr key={todo.todo_id}>
            <td>{todo.description}</td>
            <td><EditTodo/></td>
            <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
          </tr>
        ))}
        </tbody>
      </table>
    </Fragment>
  );
  
}

export default ListTodos;
