// src/App.js
import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const todosRef = collection(db, "todos");
    const unsubscribe = onSnapshot(todosRef, (snapshot) => {
      const todosList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTodos(todosList);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addTodo = async () => {
    if (newTodo.trim() !== "") {
      const todosRef = collection(db, "todos");
      await addDoc(todosRef, {
        text: newTodo,
        completed: false,
      });
      setNewTodo("");
    }
  };

  const toggleComplete = async (todoId) => {
    const todoRef = doc(db, "todos", todoId);
    const todo = todos.find((t) => t.id === todoId);
    await updateDoc(todoRef, {
      completed: !todo.completed,
    });
  };

  const deleteTodo = async (todoId) => {
    const todoRef = doc(db, "todos", todoId);
    await deleteDoc(todoRef);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a to-do..."
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
