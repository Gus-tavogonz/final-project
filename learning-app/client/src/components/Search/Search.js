import React from "react";
import "./Search.css"

const Search = props =>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              <strong>
                <i className="fa fa-search" aria-hidden="true"></i> Start here by typing the topics you wish to learn!
              </strong>
            </h3>
          </div>
          <div className="panel-body">
            <form>
              <div className="form-group">
                <label htmlFor="term">We got some videos here!</label>
                <input onChange={props.handleTermChange} type="text" className="form-control" id="term" aria-describedby="emailHelp" />
              </div>

              
              <button onClick={props.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <br/><br/>

    <div className="row">
      <div className="col-lg-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              <strong>
                <i className="fa fa-newspaper-o" aria-hidden="true"></i> Results
              </strong>
            </h3>
          </div>
          <div className="panel-body">
            {props.renderVideos()}           
          </div>
        </div>
      </div>
    </div>
    <br/><br/>
  </div>


export default Search;