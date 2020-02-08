import React from "react";

export class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: props.task
    };
    this.parentDeleteCallback = props.deleteTask;
  }

  deleteTask() {
    this.parentDeleteCallback(this.state.task);
  }

  toggleTaskIsDone(task) {
    let newTask = {
      ...this.state.task,
      isDone: !this.state.task.isDone
    };
    this.setState({
      task: newTask
    });
  }

  render() {
    return (
      <div className={this.state.task.isDone ? "task done" : "task"}>
        <div className="icon">
          <span
            className={
              this.state.task.isDone ? "icon-ok icon-active " : "icon-ok"
            }
            onClick={this.toggleTaskIsDone.bind(this)}
          ></span>
        </div>
        <span className="text">{this.state.task.title}</span>
        <span
          className="icon-cancel"
          onClick={this.deleteTask.bind(this)}
        ></span>
      </div>
    );
  }
}
