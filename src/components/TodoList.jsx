import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { useEffect } from "react";

const TodoList = () => {

  useEffect(()=>{


  },[]);

  const filteredTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm.toLowerCase(); // Convert search term to lowercase for case-insensitive search

    return todos.filter((todo) => {
      const matchesFilter = (filter === 'COMPLETED' && todo.completed) ||
        (filter === 'INCOMPLETE' && !todo.completed) ||
        filter === 'ALL';

      const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

      return matchesFilter && matchesSearch;
    });
  });



  console.log('Filtered Todos:', filteredTodos);

  return (
    <ul>
      <li className="my-2 text-lg italic">List of task is showing here</li>
      {filteredTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;
