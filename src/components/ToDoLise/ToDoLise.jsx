import React from "react";

import "./ToDoLise.css";
import { Task } from "./Task";

export class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.newIndex = 2;
    this.state = {
      tasks: [
        { id: 0, title: "learn JS", isDone: false },
        { id: 1, title: "learn REACT JS", isDone: false }
      ]
    };
  }

  createNewTask = e => {
    let value = e.currentTarget.value;
    if (e.key === "Enter") {
      this.setState({
        tasks: [
          ...this.state.tasks,
          { id: this.newIndex, title: value, isDone: false }
        ]
      });
      e.currentTarget.value = "";
      this.newIndex++;
    }
  };

  deleteTask(task) {
    const newTaskList = this.state.tasks.filter(t => {
      return t.id !== task.id;
    });

    this.setState({
      tasks: newTaskList
    });
  }

  render() {
    return (
      <div className="todolist">
        <div className="header">
          <input onKeyPress={this.createNewTask} />
        </div>
        <div className="tasks">
          {this.state.tasks.map(task => (
            <Task
              key={task.id}
              task={task}
              deleteTask={this.deleteTask.bind(this)}
            />
          ))}
        </div>
      </div>
    );
  }
}
