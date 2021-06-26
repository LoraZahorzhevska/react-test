import React, { Component } from "react";

class Form extends Component {
  // этот state не для сабмита, а для рендера формы
  state = {
    name: "",
    tag: "",
  };

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
  reset = () => {
    this.setState({ name: "", tag: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name{" "}
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Tag{" "}
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>
        <button tupe="submit">Add</button>
      </form>
    );
  }
}

export default Form;
