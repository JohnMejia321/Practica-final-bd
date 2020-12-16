import React from "react";

export default class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    });
    this.props.onChange({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <form>
        <input
          name="Name"
          placeholder="Name"
          value={this.state.firstName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="Price"
          placeholder="Price"
          value={this.state.lastName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="Description"
          placeholder="Description"
          value={this.state.username}
          onChange={e => this.change(e)}
        />
        <br />
      
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}