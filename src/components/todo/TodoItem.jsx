/* eslint-disable react/prop-types */
const TodoItem = ({ todo, onDeleteTodoItem, isDone, onDeleteTodoItem }) => {
  const { id, title, content } = todo;
  return (
    <li className="todo-card-item">
      <article>
        <h3>{title}</h3>
        <p>{content}</p>
        <div>
          <button onClick={() => onDeleteTodoItem(id)}>삭제</button>
          <button onClick={() => onToggleTodoItem(id)}>
            {isDone ? "취소" : "완료"}
          </button>
        </div>
      </article>
    </li>
  );
};

export default TodoItem;
