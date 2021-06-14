import React, { Component } from "react";
import "./ColorPicker.css";

class ColorPicker extends Component {
  state = {
    activeOptionsIdx: 3,
  };

  setActiveIdx = (index) => {
    this.setState({ activeOptionsIdx: index });
  };

  makeOptionsClassName = (index) => {
    const optionClasses = ["ColorPicker__option"];

    if (index === this.state.activeOptionsIdx) {
      optionClasses.push("ColorPicker__option--active");
    }

    return optionClasses.join(" ");
  };

  render() {
    // const activeOptionLabel = this.props.options[this.state.activeOptionsIdx];
    //   вычисляемое свойство - вычисляется на базе проп и стейт
    const { label } = this.props.options[this.state.activeOptionsIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет:{label}</p>

        <div>
          {this.props.options.map(({ label, color }, index) => {
            const optionClassName = this.makeOptionsClassName(index);

            return (
              <button
                key={label}
                // className="ColorPicker__option"
                className={optionClassName}
                style={{
                  backgroundColor: color,
                  //   border:
                  //     index === this.state.activeOptionsIdx
                  //       ? "5px solid black"
                  //       : "none",
                }}
                onClick={() => this.setActiveIdx(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
