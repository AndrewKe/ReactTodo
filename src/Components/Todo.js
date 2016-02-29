import React from "react"
import Model from "./Model.js"
import './TodoStyle.css'

export default class TodoList extends React.Component {
  constructor(){
    super();
  }

  handleClick(){
    Model.removeTodo(this.props.text)
  }

  render(){

    var style = {
      margin: 10
    };

    return (
      <li style = {{style}}>
        {this.props.text}
        <button onClick = {this.handleClick.bind(this)}>X</button>
      </li>
    )
  }
}
