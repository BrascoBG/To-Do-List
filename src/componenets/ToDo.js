import React from 'react';

function ToDo(props){
    return(
        <div className="body">
            <div>
            <h1>Things To Do</h1>

            <input type="text"
            placeholder="Type here..."
            value={props.current.text}
            onChange={props.eventHandler}
            />

            <button className="main-btn" onClick={props.addItem}>Add</button>
            {props.items.map(item => {
            return(
                <ul className="list" key={props.items.key}>
                <li>{item.text}</li>
                <button className="primary-btn" onClick={() => props.deleteItem(item.key)}>X</button>
                </ul>
            )
            })}
            </div>
        </div>
    )
}

export default ToDo;