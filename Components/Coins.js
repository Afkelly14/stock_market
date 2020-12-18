import React, { Component } from "react";
import { BrowserRouter, Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import Search from "./Search";


class Coins extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }; //state
  }
  componentDidUpdate = () => {
    axios({
      baseURL: "https://coinranking1.p.rapidapi.com/coins",
      method: "GET",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key": "2b8d3472bamshb3c4f5ef0be4828p1ba36ejsnb64c20deed5d",
        useQueryString: true,
      },
    })
      .then((response) => {
        // console.log(response.data.data);
        return response.data.data;
      })
      .then((data) => {
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
    if (this.state.data.coins) {
      return (
        <div className='allCoins'>
          {this.state.data.coins.map((coin, i) => {
          
            return (
              <React.Fragment>
                <div className="coin">
                 
                <p><strong>Symbol: </strong>{coin.symbol}</p>
            <p><strong>All Time High Price:</strong> ${coin.allTimeHigh.price}</p>
          
                <p><strong>Name:</strong> {coin.name}</p>
                <p className="Description"><strong>Description: </strong>{coin.description}</p>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      );
    }
    return (
      <React.Fragment>
        <p>Loading...</p>
      </React.Fragment>
    );
  }
}
export default Coins;