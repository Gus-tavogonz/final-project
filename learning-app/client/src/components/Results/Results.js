import React from "react";
import "./Results.css"

const Results = props =>

    <div className="card col-sm-6">
    
    <img className="media-object" src={props.imageUrl} />
    <h4>
        <span>
            <em>{props.title}</em>
        </span>
        <span className="btn-group pull-right">
            <a href={props.title} target="_blank">
            <button className="btn btn-default">View video</button>
            </a>
        <button className="btn btn-primary" onClick={() => props.handleSaveButton(props._id)}>Save</button>
        </span>
    </h4>
        <p>Date Published: {props.date}</p>
    
    </div>



export default Results;