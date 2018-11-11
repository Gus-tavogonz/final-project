import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";

import Saved from "../../components/Saved";
import Results from "../../components/Results";
import Search from "../../components/Search"
import API from "../../utils/API";

import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { relative } from "path";
import axios from 'axios';

class Articles extends Component {

  state = {
    videos:[],
    term:""

  }

  componentDidMount(){
    console.log()
  }

  

  //Input for term 
  handleTermChange = (event) =>{
    this.setState({ term:event.target.value})
  }



  handleFormSubmit = (event) =>{
    event.preventDefault();
    console.log("getting videos");
    console.log("this.state.term: ", this.state.term);
    API.searchYoutube(this.state.term)
    .then((res) =>{
      this.setState({ videos: res.data.items });
      console.log("this.state.videos: ", this.state.videos );
    })
  }

  renderVideos = () => {
    return this.state.videos.map(video => (
      <Results
      id={video.id.videoId}
      key={video.id.videoId}
      title={video.snippet.title}
      imageUrl={video.snippet.thumbnails.high.url}
     
      />
    ));

    
  }
  
  render() {
    return (

     
      <div className="main-container">
        <div className="container">
        
          {/* Search Form and Results Section */}
          
          <Search
            handleTermChange={this.handleTermChange}
            handleFormSubmit={this.handleFormSubmit}
            renderVideos={this.renderVideos}
          
          />
          {/* Saved Articles Section */}
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                      <strong>
                        <i className="fa fa-download" aria-hidden="true"></i> Saved Articles</strong>
                    </h3>
                  </div>
                  <div className="panel-body">
                    <ul className="list-group">
                 
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <hr />
            <p className="pull-right">
              <i className="fa fa-github" aria-hidden="true"></i>
              Proudly built using React.js
            </p>
          </footer>
        </div>
      </div>
    
    );
  }
}


export default Articles;
