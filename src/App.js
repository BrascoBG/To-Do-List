import React, { useState } from "react";

class AppToDo extends React.Component {
    constructor(){
        super()
        this.state = {
            toDo: "",
            item: "",
            items: []
        }
        this.eventHandler = this.eventHandler.bind(this)
        this.dataItem = this.dataItem.bind(this)
    }

    eventHandler(evt){
        const {name, value} = evt.target
        this.setState({
            [name]: value
        })
    }

    dataItem(){
        const item = this.state.item;
        const items = this.state.items;
        items.push(item)
        this.setState({
            items: items
        })
    }

    render(){
        return(
            <div>
                <h1>To Do App</h1>
                <input type="text"
                name="item"
                onChange={this.eventHandler}
                />
                <button onClick={this.dataItem}>Submit</button>
                {this.state.items.map((item) => {
                    return(
                        <p>{item}</p>
                    )
                })}
            </div>
        )
    }
}

export default AppToDo;
