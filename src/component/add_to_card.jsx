import React, { useState, useEffect } from "react";

import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addOrUpdateTodo = () => {
    if (!todo.trim()) return;

    if (editId !== null) {
      setTodos((prevTodos) =>
        prevTodos.map((t) =>
          t.id === editId ? { ...t, todo } : t
        )
      );
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), todo, isCompleted: false }]);
    }
    setTodo("");
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((t) =>
        t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const editTodo = (id) => {
    const taskToEdit = todos.find((t) => t.id === id);
    setTodo(taskToEdit.todo);
    setEditId(id);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: 20 }}>
      <TextField
        label="Enter Todo"
        variant="outlined"
        fullWidth
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        style={{ marginBottom: 10 }}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={addOrUpdateTodo}
      >
        {editId ? "Update" : "Add"}
      </Button>
      <List>
        {todos.map((t) => (
          <ListItem key={t.id} divider>
            <Checkbox
              checked={t.isCompleted}
              onChange={() => toggleComplete(t.id)}
            />
            <ListItemText
              primary={t.todo}
              style={{ textDecoration: t.isCompleted ? "line-through" : "none" }}
            />
            <IconButton onClick={() => editTodo(t.id)}>
              <Edit color="primary" />
            </IconButton>
            <IconButton onClick={() => deleteTodo(t.id)}>
              <Delete color="error" />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TodoApp;
