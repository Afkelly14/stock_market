import React, { Component } from "react";
import { BrowserRouter, Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";


class Forex extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }; //state
  }
  componentDidMount = () => {
    axios({
      baseURL: "https://coinranking1.p.rapidapi.com/exchanges",
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
    if (this.state.data.exchanges) {
      return (
        <div>
          {this.state.data.exchanges.map((exchange, i) => {
            return (
              <React.Fragment>
               <div className="allForex">
                <p> <strong>Name:</strong> {exchange.name}</p>
            <p className="Description"><strong>Description:</strong> {exchange.description}</p>
            <p><strong>Market Share:</strong> {exchange.marketShare}</p>
            <p><strong>Rank:</strong>{exchange.rank}</p>
            <p><strong>Volume:</strong> {exchange.volume}</p>
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
export default Forex;