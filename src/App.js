import React from "react";
import ToDo from "./componenets/ToDo";
import Footer from "./componenets/Footer";
import AddToDo from "./componenets/AddToDo";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./componenets/About";
import Header from "./componenets/Header";
import "./App.css";

class AppToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delToDo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  addToDo = (title) => {
    const newItem = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newItem] });
  };

  render() {
    return (
      <Router>
        <div className="main">
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <AddToDo addToDo={this.addToDo} />
                <ToDo
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delToDo={this.delToDo}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default AppToDo;
