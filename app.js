var app = angular.module("todoApp", []);
app.controller("Todoctrl", Todoctrl);

function Todoctrl() {
  this.todoIndex =
    this.todos = [
      "angular is best",
      "react is best",
      "angular2 is best"
    ];
  this.addNewTodo = function() {
    this.todos.push(this.newTodo);
    this.newTodo = "";
  }
  this.selected = false;
  console.log(this.selected)
  this.removetodo = function(index) {
    this.todos.splice(index, 1);
    // var selectedElement = this.selected;
    //   for (i=0; i<this.todos.length; i++){
    //     if(selectedElement[i]){
    //       this.todos.slice(selectedElement[i],1)
    //     }
    //   }


  }
}
