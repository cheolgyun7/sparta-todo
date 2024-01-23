/* eslint-disable no-unused-vars */
//uncontrolled component
const TodoForm = ({ onSubmitTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;

    if (!title || !content) {
      return;
    }

    onSubmitTodo({
      id: crypto.randomUUID(), //아이디웬만하면안겹치게하는거
      title,
      content,
      isDone: false,
    });
    e.target.reset(); //setState사용안해도 form안에 있는reset()을써준다
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="제목" name="title" />
      <input type="text" placeholder="내용" name="content" />
      <button type="submit">제출</button>
    </form>
  );
};

export default TodoForm;
