import React, { useEffect, useState } from "react"; //imr
import "./Card.css";

import getApiData from "../../Service/Service";


export default function Card() {
  
  const [data, setData] = useState([]);
  const[page,setPage]=useState(1)
 const FetchData=async()=>{
  const Response=await getApiData(page)
  setData(Response)
 }
  useEffect(() => {
    FetchData()
  }, [page]);
  const previous=()=>{
    
    setPage(page-1)
   
  }
  const next=()=>{

    setPage(page+1)
    window.scrollTo(0,0)
   

  }

 
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
             <a href={val.url} target="_blank"> Read More</a>
            </div>
            
          </div>
        </div>
        )
      })
    }
    </div>
    <div id="pagechange">
     {page==1 || <button className="npbutton1 nepr" onClick={previous} >&larr;Previous</button>}
      <button className="npbutton2  nepr" onClick={next}>Next &rarr; </button>
    </div>
     </div>
    </>
  );
}
