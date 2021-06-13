import React from "react";
import "./Counter.css";

class Counter extends React.Component {
  state = {
    value: 0,
  };

  handleIncrement = () => {
    this.setState((prevState) => ({ value: prevState.value + 1 }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ value: prevState.value - 1 }));
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>
        <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            увеличить на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            уменьшить на 1
          </button>
        </div>
      </div>
    );
  }
}

// const Counter = () => (
//   <div className="Counter">
//     <span className="Counter__value">0</span>
//     <div className="Counter__controls">
//       <button type="button">увеличить на 1</button>
//       <button type="button">уменьшить на 1</button>
//     </div>
//   </div>
// );

export default Counter;
