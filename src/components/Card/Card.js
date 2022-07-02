import React, { useEffect, useState } from "react"; //imr
import "./Card.css";
import axios from "axios";
import img from "./logo.jpg"

export default function Card() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const apidata = () => {
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=in&apiKey=46affd9e463649188755518362275b03"
        )
        .then((response) => {
          // console.log(response);
          setData(response.data.articles);
        });
    };
    apidata();
  }, []);

 
  return (
    <>
    <div id="container">
      <h1>Top Headlines for Today</h1>
    <div id="cards">
    {
      data.map((val,index)=>{
        return(
        <div id="card" key={index}>
         <div id="image">
           <img src={val.urlToImage} alt="IMG NOT FOUND" />
         </div>
           <div id="heading">
           {val.title}
           </div>
           <div id="description">
             {val.description}
           </div>
          <div id="sharemore">
          
            <div id="readmore">
             <a href={val.url}> Read More</a>
            </div>
            <div id="share">Share</div>
          </div>
        </div>
        )
      })
    }
    </div>
     </div>
    </>
  );
}
