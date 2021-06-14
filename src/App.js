import React, { Component } from "react";
import "./App.css";
// import Counter from "./components/counter/Counter";
// import Dropdown from "./components/Dropdown/Dropdown";
// import ColorPicker from "./components/ColorPicker/ColorPicker";
import TodoList from "./components/TodoList";

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D8B" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

class App extends Component {
  state = {
    todos: [
      { id: "id-1", text: "Выучить основы React", completed: true },
      { id: "id-2", text: "Разобраться с React Router", completed: false },
      { id: "id-3", text: "Пережить Redux", completed: false },
    ],
  };

  // мы хотим изменить состояние от предыдущего
  // хотим взять все todo кроме того id которого мы передаем
  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
      // мы не мутируем коллекцию
      // prevState.todos - предыдущее значение todos
      // filter((todo) => todo.id !== todoId) - для каждой из них проверяем айишник
      // в новый массив возвращаем тот id, который не равен
    }));
  };

  render() {
    const { todos } = this.state;

    const completeTodosCount = todos.reduce(
      // (acc, todo) => (todo.completed ? acc + 1 : acc),
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <>
        {/* <ColorPicker options={colorPickerOptions} /> */}

        <div>
          <span>Общее кол-во:{todos.length}</span>
          <span>Кол-во выполненых:{completeTodosCount}</span>
        </div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

// function App() {
//   return (
//     <>
//       {/* <ColorPicker options={colorPickerOptions} /> */}

//       <TodoList />
//     </>
//   );
// }

export default App;
