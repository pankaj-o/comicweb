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
          console.log(response);
          setData(response.data.articles);
        });
    };
    apidata();
  }, []);

  console.log({data},"uuiopio")
  return (
    <><div id="container">
     <div id="card">
      <div id="image">
        <img src={data[0].urlToImage} alt="notimg" />
      </div>
        <div id="heading">
        {data[0].title}
        </div>
        <div id="description">
          Lorem ipsum dolor sit amet consectimpedit neque dicta aliquam repelleiatis?.......
        </div>
       <div id="sharemore">
       
         <div id="readmore">
          readmore
         </div>
         <div id="share">Share</div>
       </div>
     </div>
      
    </div>
    </>
  );
}
