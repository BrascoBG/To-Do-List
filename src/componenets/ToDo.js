import React from "react";
import ToDoItem from "./ToDoItem";

function ToDo(props) {
  return (
    <div>
      {props.todos.map((item) => (
        <ToDoItem
          item={item}
          key={item.id}
          markComplete={props.markComplete}
          delToDo={props.delToDo}
        />
      ))}
    </div>
  );
}

export default ToDo;
