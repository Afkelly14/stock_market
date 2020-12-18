import React, { Component } from "react";
import { BrowserRouter, Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import Markets from "./Components/Markets";
import Coins from "./Components/Coins"
import Forex from "./Components/Forex";
import Nav from "./Components/Nav";
import Search from "./Components/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/Home";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }; //state
  }
  componentDidMount = () => {
    axios({
      baseURL: "https://coinranking1.p.rapidapi.com/markets",
      method: "GET",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key": "2b8d3472bamshb3c4f5ef0be4828p1ba36ejsnb64c20deed5d",
      },
    })
      .then((response) => {
        return response.data.data;
      })
      .then((data) => {
        data = "<br>asdasd</br><p>test</p>".replace(/<\/?[^>]+(>|$)/g, "");
        // console.log(data);
        this.setState({ data }, this.logState);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  //check to see what state is
  logState = () => {
    // console.log(this.state);
  };

  render() {
    return (
      <div>
      
          <BrowserRouter>
            <Nav />
            <Route exact path="/" component={Home} />
            <Route exact path="stock_market/Coins" component={Coins} />
            <Route exact path="stock_market/Markets" component={Markets} />
            <Route exact path= "stock_market/Foreign" component={Forex} />
          </BrowserRouter>
       
      </div>
    );
  }
}

export default App;