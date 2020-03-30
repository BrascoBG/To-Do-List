import React, { useState } from "react";

class AppToDo extends React.Component {
    constructor(){
        super()
        this.state = {
            items: [],
            current: {
              text: "",
              key: ""
            }
        }
        this.eventHandler = this.eventHandler.bind(this)
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }

    eventHandler(e){
        this.setState({
          current:{
            text: e.target.value,
            key: Date.now()
          }
        })
    }

    addItem(e){
      e.preventDefault();
      const newItem = this.state.current

      if(newItem.text !== ""){ 
      const newItems = [...this.state.items, newItem];
        this.setState({
          items: newItems,
          current:{
            text:"",
            key:""
          }
        })
      }
    }

    deleteItem(key){
      const items = [...this.state.items]
      const filteredItems = items.filter(item => item.key !== key);
        this.setState({
          items: filteredItems
        })
      }
    
    render(){
        return(
            <div>
                <h1>To Do App</h1>

                <input type="text"
                value={this.state.current.text}
                onChange={this.eventHandler}
                />

                <button onClick={this.addItem}>Submit</button>
                {this.state.items.map(item => {
                  return(
                    <ul key={this.state.items.key}>
                      <li>{item.text}</li>
                      <button onClick={() => this.deleteItem(item.key)}>X</button>
                    </ul>
                  )
                })}
                
            </div>
        )
    }
}

export default AppToDo;
