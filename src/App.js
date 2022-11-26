import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    todoData: [],
    value: "",
  };

  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  getStyle = (checked) => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: checked ? "line-through" : "none",
    };
  };

  onClickDelte = (id) => {
    let newTodoData = this.state.todoData.filter((todo) => todo.id !== id);
    this.setState({ todoData: newTodoData });
  };

  onChange = (e) => {
    this.setState({ value: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    let newTodoData = {
      id: Date.now(),
      title: this.state.value,
      checked: false,
    };

    this.setState({
      todoData: [...this.state.todoData, newTodoData],
      value: "",
    });
  };

  onChecked = (id) => {
    let newTodoData = this.state.todoData.map((todo) => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }
      return todo;
    });

    this.setState({ todoData: newTodoData });
  };

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>Todo List</h1>
          </div>
          <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
            <input
              type="text"
              name="name"
              style={{ flex: "10", padding: "5px" }}
              placeholder="할 일을 입력하세요"
              value={this.state.value}
              onChange={this.onChange}
            />
            <button type="submit" className="btn" style={{ flex: 1 }}>
              추가
            </button>
          </form>
          <div>
            {this.state.todoData.map((todo) => (
              <div style={this.getStyle(todo.checked)} key={todo.id}>
                <input
                  type="checkbox"
                  defaultChecked={todo.checked}
                  onChange={() => this.onChecked(todo.id)}
                />
                {todo.title}
                <button
                  style={this.btnStyle}
                  onClick={() => this.onClickDelte(todo.id)}
                >
                  x
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
