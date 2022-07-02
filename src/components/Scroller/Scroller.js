import React from "react"
import "./Scroller.css"
const img1="https://picsum.photos/id/14/200/300"
const img2="https://picsum.photos/id/31/200/300"
const img3="https://picsum.photos/id/15/200/300"
const img4="https://picsum.photos/id/167/200/300"
const img5="https://picsum.photos/seed/picsum/200/300"

export default function Scroller() {
    return (
        <>
        <div className="mainsccoller">
         <div className="scroller">
             <div className="scroller_item">
                 <img src={img1} alt="Image" />
             </div>
         </div>
         <div className="scroller">
             <div className="scroller_item">
                 <img src={img1} alt="Image" />
             </div>
         </div>
         <div className="scroller">
             <div className="scroller_item">
                 <img src={img1} alt="Image" />
             </div>
         </div>
         <div className="scroller">
             <div className="scroller_item">
                 <img src={img1} alt="Image" />
             </div>
         </div>
         <div className="scroller">
             <div className="scroller_item">
                 <img src={img1} alt="Image" />
             </div>
         </div>
        </div>
             
         
        </>
     )
}