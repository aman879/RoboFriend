import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import ErrorBoundary from "./ErrorBoundary";
import Scroll from "./Scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robotInfo: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robotInfo: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredData = this.state.robotInfo.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    if (this.state.robotInfo.length === 0) {
      return <h1 className="tc">Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <header>
            <h1>RoboFriends</h1>
            <div className="search-box">
              <SearchBox SearchChange={this.onSearchChange} />
            </div>
          </header>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredData} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
