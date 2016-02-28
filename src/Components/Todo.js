import React from "react"
import Model from "./Model.js"

export default class TodoList extends React.Component {
  constructor(){
    super();
  }

  handleClick(){
    Model.removeTodo(this.props.text)
  }

  render(){
    return (
      <li onClick = {this.handleClick.bind(this)}>
        {this.props.text}
      </li>
    )
  }
}
