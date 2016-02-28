var todos = [];
var callbacks = [];

class Model {
  update(){
    for (var c of callbacks){
      c();
    }
  }

  addTodo(todo){
    todos.push(todo);
    this.update();
  }

  removeTodo(todo){
    console.log("Removing: " + todo);
    todos.splice(todos.indexOf(todo), 1);
    this.update();
  }

  getTodos(){
    return todos;
  }

  subscribe(callback){
    callbacks.push(callback);
  }
}

var model = new Model();
export default model;
