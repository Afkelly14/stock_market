import React, { Component } from "react";
import { Router } from 'react-router-dom';
import Nav from "./Nav";
import axios from 'axios';
import Coins from "./Coins";


class Search extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this)
 this.state = {
   data: [],
   filteredData: [],
   name: ''
 };
}

 getInfo = () => {
    axios({
      baseURL: "https://coinranking1.p.rapidapi.com/",
      method: "GET",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key": "2b8d3472bamshb3c4f5ef0be4828p1ba36ejsnb64c20deed5d"
      },
    })
      .then((response) => {
        return response.data.data; 
      })
      .then((data) => {
        console.log(data);
        let filteredData = []
        this.setState({ data: filteredData }, this.logState);
      })
    }
 handleInputChange = (e) => {
     e.preventDefault();
     let data = []
     let name = ''
     console.log(e.target.value)
  this.setState({ filteredData: e.target.value });
  let filteredData = this.state.data.filter((name => this.state.data.name.toLowerCase().includes(e.target.value.toLowercase())))
    console.log(filteredData);
    this.setState({ data: filteredData });
 }
  render() {
      let data = this.state.data.map((data, i) => {
          if(this.match.params.name === data) {
             
              return data
          }
      })
   return (
    <React.Fragment>
     <form>
       <input
         placeholder="Search for..."
         value = {this.state.filteredData}
         onChange={this.handleInputChange.bind(this)}
        />
    </form>
       
        </React.Fragment>
   )
}
}

export default Search