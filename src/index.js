import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import Sdata from "./Sdata";
import "./index.css"; 

//map function

function ncard(val){
  return (
    <Card imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
}

ReactDOM.render(
  <>
    <h1>  List Top Shows on Netflix </h1>
    <div className="wrap">
    {Sdata.map(ncard)}
    </div>
  </>,
  document.getElementById('root')
);


