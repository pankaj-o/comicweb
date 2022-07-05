import axios from "axios";
const getApiData=(page,QueryData)=>{
 const response=axios.get(`https://newsapi.org/v2/everything?q=${QueryData}&apiKey=46affd9e463649188755518362275b03&page=${page}&pageSize=9`).then(
    (res)=>res.data.articles
 ).catch((Error)=>console.log(Error))
 return response
}
export  default getApiData