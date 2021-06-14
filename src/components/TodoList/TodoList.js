import React from "react";
import "./TodoList.css";

// {todos} - деструкруризируется свойство пропс
const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <ul>
      {/* map это цикл, для каждой анонимной ф-ии в кнопки он будет свой */}
      {todos.map(({ id, text }) => (
        <li key={id} className="TodoList__item">
          <p>{text}</p>
          <button type="button" onClick={() => onDeleteTodo(id)}>
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
