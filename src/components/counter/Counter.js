import React from "react";
import "./Counter.css";
import Controls from "./Controls";

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
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

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
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
