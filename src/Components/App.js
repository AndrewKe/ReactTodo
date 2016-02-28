import React from "react"
import TodoList from "./TodoList.js"
import Model from "./Model.js"

export default class App extends React.Component {
  constructor(){
    super();
  }

  componentWillMount(){
    console.log("Mountings!");
  }

  submit(){
    console.log("Submiting todo with value: " + this.refs.text.value);
    Model.addTodo(this.refs.text.value);
    this.refs.text.value = "";
  }

  render(){
    console.log("Rendering");
    console.log(this.state);
    return (
      <div>
        <p>Hello {this.props.name}</p>

        <p>Your Todos: </p>

        <TodoList/>

        <input type = "text" ref = "text"/>
        <button onClick = {this.submit.bind(this)}> Add Todo! </button>
      </div>
    )
  }
}
