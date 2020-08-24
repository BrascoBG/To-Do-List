import React, { useState } from "react";

function AddToDo(props) {
  const [title, setTitle] = useState("");
  const submit = (e) => {
    e.preventDefault();
    props.addToDo(title);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={submit} className="form">
        <input
          className="input-txt"
          placeholder="Add item..."
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <svg
          onClick={submit}
          id="plus"
          style={{ color: "#b53d74" }}
          className="bi bi-plus-circle"
          width="3em"
          height="3em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z"
            clipRule="evenodd"
          />
        </svg>
      </form>
    </div>
  );
}

export default AddToDo;
