import { useState } from 'react';
import TodosList from './TodosList';
import InputTodo from '@/components/InputTodo';

const TodosLogic = () => {
  
  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ]);

  return (
    <div>
      <InputTodo />
      <TodosList todosProps={todos} setTodos={setTodos} delTodo={delTodo}/>
    </div>
  );
};
export default TodosLogic;
