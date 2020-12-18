import React, { Component } from "react";
import { BrowserRouter, Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";


class Markets extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
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
        useQueryString: true,
      },
    })
      .then((response) => {
        // console.log(response.data.data);
        return response.data.data;
      })
      .then((data) => {
        console.log(data);
        this.setState({ data }, this.logState);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //check to see what state is
  logState = () => {
    console.log(this.state);
  };
  render() {
    if (this.state.data.markets) {
      return (
        <div className="allmarkets">
          {this.state.data.markets.map((market, i) => {
            return (
              <React.Fragment>
                <div className="markets">
                <p><strong>Base Symbol:</strong> {market.baseSymbol}</p>
                <p><strong>Quote Symbol:</strong> {market.quoteSymbol}</p>
                <p><strong>Price:</strong> ${market.price}</p>
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
export default Markets;