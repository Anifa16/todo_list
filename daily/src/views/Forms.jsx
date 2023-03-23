import React, { Component } from "react";


export default class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
      list: []
    };
    this.updateInput = this.updateInput.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  updateInput(key, value) {
    this.setState({
      [key]: value
    });
  }

  addTask(e) {
    e.preventDefault();
    const newTask = {
      id: 1 + Math.random(),
      value: this.state.newTask.trim()
    };
    if (newTask.value !== "") {
      const list = [...this.state.list];
      list.push(newTask);
      this.setState({
        list,
        newTask: ""
      });
    }
  }

  deleteTask(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({
      list: updatedList
    });
  }

  render() {
    return (
      <div>
        <form className="forms" onSubmit={this.addTask}>
          <input
            type="text"
            className="inputs"
            placeholder="Let's get started, type a task..."
            value={this.state.newTask}
            onChange={(e) => this.updateInput("newTask", e.target.value)}
          />
          <button className="input-btn" type="submit">Add to List</button>
        </form>
        <ul>
          {this.state.list.map((item) => {
            return (
              <li key={item.id}>
                {item.value}
                <button onClick={() => this.deleteTask(item.id)}>Done</button>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}
