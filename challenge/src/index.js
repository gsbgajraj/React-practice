import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

const heading ={
    color: "#000000",
    textAlign: "center",
    textTransform: "capitalize",
    fontWeight: "bold",
    margin: "50px 0",
    fontFamily: "'Jost', sans-serif" 
}

const name= "Gajraj singh";
const img1='https://picsum.photos/200/300 ';
const img2='https://picsum.photos/300/300 ';
const img3='https://picsum.photos/310/300 ';
const links="www.youtube.com/codendevelop";

ReactDOM.render(
  <>
  <h1 style={heading}>my name is {name}</h1>
  <div className='img-div'>
  <img src={img1} alt="sorry for the image " />
  <img src={img2} alt="sorry for the image " />
  <a href={links} target='_blank'>
  <img src={img3} alt="sorry for the image " />
  </a>
  </div>
  </>
    ,document.getElementById("root")
)