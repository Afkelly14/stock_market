import React, { Component } from "react";
import { BrowserRouter, Router, Route, Link, Switch } from "react-router-dom";

class Home extends Component {
    render () {
        return (
    <div className="home">
        <h1>
            CoinRanking API
        </h1>
        <h4>Get high quality data about all coins, markets and exchanges.</h4>
        <li>Coins</li>
        <li>Foreign Exchange Market</li>
        <li>Bitcoin Markets</li>
    
    </div>
        )//return
    }//render
}//component
export default Home;