import React from "react";
import ToDo from "./componenets/ToDo";
import Footer from "./componenets/Footer";
import AddToDo from "./componenets/AddToDo";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
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

  componentDidMount() {
    const localData = JSON.parse(localStorage.getItem("Todo"));
    if (localData !== null) {
      this.setState({ todos: localData });
    }
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          localStorage.setItem("Todo", JSON.stringify(this.state.todos));
        }
        return todo;
      }),
    });
  };

  delToDo = (id) => {
    this.setState(
      {
        todos: [...this.state.todos.filter((todo) => todo.id !== id)],
      },
      () => {
        localStorage.setItem("Todo", JSON.stringify(this.state.todos));
        if (this.state.todos.length === 0) {
          localStorage.removeItem("Todo");
        }
      }
    );
  };

  addToDo = (title) => {
    if (title !== "") {
      const newItem = {
        id: uuidv4(),
        title: title,
        completed: false,
      };
      this.setState({ todos: [...this.state.todos, newItem] }, () => {
        localStorage.setItem("Todo", JSON.stringify(this.state.todos));
      });
    } else {
      alert("Please add Item");
    }
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
