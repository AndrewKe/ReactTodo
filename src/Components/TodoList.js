import React from "react"
import Model from "./Model.js"
import Todo from "./Todo.js"

export default class TodoList extends React.Component {
  constructor(){
    super();
    Model.subscribe(() => {
      this.forceUpdate();
    })
  }

  render(){
    return (
      <ul>
        {Model.getTodos().map(todo => {
          return <Todo key = {Math.random() * 100} text = {todo}/>
        })}
      </ul>
    )
  }
}
