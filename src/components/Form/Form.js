import React, { Component } from "react";
import shortid from "shortid";

class Form extends Component {
  // этот state не для сабмита, а для рендера формы
  state = {
    name: "",
    tag: "",
    experience: "junior",
    licence: false,
  };

  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  handleChange = (event) => {
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);

    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); //чтобы по умолчанию не перезагрузилась страница
    // console.log(this.state);

    this.props.onSubmit(this.state);

    this.reset();
  };

  // handleNameChange = (event) => {
  //   // console.log(event.currentTarget.value);

  //   this.setState({ name: event.currentTarget.value });
  // };

  // handleTagChange = (event) => {
  //   this.setState({ tag: event.currentTarget.value });
  // };

  // сбрасывает значение в инпутах

  handleLicenceChange = (event) => {
    console.log(event.currentTarget.checked);

    this.setState({ licence: event.currentTarget.checked });
  };

  reset = () => {
    this.setState({ name: "", tag: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name{" "}
          <input
            id={this.nameInputId}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor={this.tagInputId}>
          Tag{" "}
          <input
            id={this.tagInputId}
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>

        <p>Your level:</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === "junior"}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === "middle"}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === "senior"}
          />
          Senior
        </label>

        <label>
          {/* checked={this.state.licence} буквально зависит от значения в стейте */}
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />{" "}
          Agree with the condition
        </label>

        <button type="submit" disabled={!this.state.licence}>
          Send
        </button>
      </form>
    );
  }
}

export default Form;
