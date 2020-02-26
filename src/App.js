import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/Search-box/search-box.jsx";
import "./App.css";
import Axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
    // this.handleChange = this.handleChange.bind(this);
  }
  // handleChange = () => {
  //   this.setState({
  //     name: "hello anjay"
  //   });
  // };

  // handleChange = ({ target }) => {
  //   this.setState({
  //     [target.name]: target.value
  //   });
  // };
  handleChange = e => {
    this.setState({
      searchField: e.target.value
    });
  };

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      this.setState({
        robots: response.data
      });
    });
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredrobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    // const address = this.state.robots.map(data => data.address.street);
    // console.log("addreas", address);
    // console.log("asd", robots);

    return (
      <div className="App">
        <h1>Robot Group</h1>
        <SearchBox
          placeholder="Search Robot"
          handleChange={this.handleChange}
        />

        <CardList robots={filteredrobots} />
        {/* {robots.map((r, i) => {
          return (
            <div key={i}>
              <span>{r.address.street}</span>
            </div>
          );
        })} */}

        {/* <button onClick={this.handleChange}>button</button> */}
      </div>
    );
  }
}
