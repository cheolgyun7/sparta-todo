/* eslint-disable no-unused-vars */
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDeleteTodoItem, onDeleteTodoItem }) => {
  return (
    <section>
      <h3>Working</h3>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodoItem={onDeleteTodoItem}
            onDeleteTodoItem={onDeleteTodoItem}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
