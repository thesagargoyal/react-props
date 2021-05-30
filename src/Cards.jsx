import React from 'react';

function Card(props){
    return(
      <>
      <div className="cards">
      <div className="card">
        <img src={props.imgsrc} alt="myPic" className="card_image"/>
        <div className="card_info">
          <div className="card_category center">{props.title}</div>
          <h3 className="card_title center"> {props.sname} </h3>
          <a href={props.link} target="_blank">
            <button className="btn center"> Watch Now</button>
          </a>
        </div>
      </div>
    </div>
    </>
    );
  };

  export default Card;