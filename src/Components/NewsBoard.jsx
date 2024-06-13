import { useEffect } from "react";
import { useState } from "react"
import { NewsItem } from "./NewsItem";


export const NewsBoard = ({category}) => {

    const [articles, setArticle] = useState([]);

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=4e5feae897704107b89bc8ec82c3cfaa`;
        fetch(url).then(response=> response.json()).then(data=>setArticle(data.articles));
    },[category])
  return (
    <div>
        <h2 className="text-center">Lastest <span className="badge bg-danger">News</span></h2>
        {articles.map((news,index)=>{
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
    </div>
  )
}
