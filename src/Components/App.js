import React from "react"
import TodoList from "./TodoList.js"
import Model from "./Model.js"
import '../styles/main.css'

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
      <div className = "background">
        <p>Hello {this.props.name}</p>

        <input type = "text" ref = "text" onSubmit = {this.submit.bind(this)}/>
        <button onClick = {this.submit.bind(this)}> Add Todo! </button>

        <TodoList/>
      </div>
    )
  }
}
