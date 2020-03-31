import React from "react";
import ToDo from './componenets/ToDo';
import Footer from './componenets/Footer'

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
            <div className="main">
                <ToDo 
                eventHandler={this.eventHandler} 
                addItem={this.addItem}
                deleteItem={this.deleteItem}
                current={this.state.current}
                items={this.state.items}
                />
                <Footer />
            </div>
        )
    }
}

export default AppToDo;
