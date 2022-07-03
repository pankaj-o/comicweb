import axios from "axios";
const getApiData=(page)=>{
 const response=axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=46affd9e463649188755518362275b03&page=${page}&pageSize=9`).then(
    (res)=>res.data.articles
 ).catch((Error)=>console.log(Error))
 return response
}
export  default getApiData