import React from "react";
import { useSpring, animated } from "react-spring";

function ToDoItem(props) {
  const { id, title } = props.item;
  const spring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  const checked = props.item.completed;

  return (
    <div className="wrapper">
      <animated.div style={spring}>
        <div className={props.item.completed ? "checked" : "wrap-items"}>
          <input
            checked={checked}
            className="input-check"
            type="checkbox"
            onChange={props.markComplete.bind(this, id)}
          />
          <p className={props.item.completed ? "marked" : "title"}>{title}</p>
          <div className="btn-del">
            <svg
              style={{ color: "#ce4175" }}
              onClick={props.delToDo.bind(this, id)}
              className="bi bi-trash"
              width="1.7em"
              height="1.7em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z" />
              <path
                fillRule="evenodd"
                d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default ToDoItem;
