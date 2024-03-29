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
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  const onToggleTodoItem = (id) => {
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

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <main>
      <TodoForm onSubmitTodo={onSubmitTodo} />
      <TodoList
        headTitle="Working"
        todos={workingTodos}
        onDeleteTodoItem={onDeleteTodoItem}
        onToggleTodoItem={onToggleTodoItem}
      />
      <TodoList
        headTitle="Done"
        todos={doneTodos}
        onDeleteTodoItem={onDeleteTodoItem}
        onToggleTodoItem={onToggleTodoItem}
      />
    </main>
  );
};

export default TodoController;
