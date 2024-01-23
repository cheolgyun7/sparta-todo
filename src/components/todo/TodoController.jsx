/* eslint-disable no-unused-vars */
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const todoObj = {
  id: 1,
  title: "learn",
  content: "content",
  isDone: false,
};

const TodoController = () => {
  const [todos, setTodos] = useState([todoObj]);
  const onSubmitTodo = (todo) => {
    setTodos((prevTodos) => [todo, ...prevTodos]);
  };
  const onDeleteTodoItem = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todo));
  };
  const onSubmitTodo = (todo) => {};
  const onDeleteTodoItem = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todoItem) => {
        if (todoItem.id === id) {
          return {
            ...todoItem,
            isDone: !todoItem.isDone,
          };
        }
        return todoItem;
      })
    );
  };

  return (
    <main>
      <TodoForm onSubmitTodo={onSubmitTodo} />
      <TodoList
        todos={todos}
        onDeleteTodoItem={onDeleteTodoItem}
        onDeleteTodoItem={onDeleteTodoItem}
      />
    </main>
  );
};

export default TodoController;
