import TodoItem from './Todoitem';
/* eslint-disable react/prop-types */
const TodosList = ({ todosProps, setTodos, delTodo }) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem key={todo.id} itemProp={todo} setTodos={setTodos} delTodo={delTodo} />
    ))}
  </ul>
);
export default TodosList;
