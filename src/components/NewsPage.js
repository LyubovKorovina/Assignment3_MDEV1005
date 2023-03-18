import axios from "axios"
import { useEffect, useState } from "react"

const News = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=everything&api-key=stjhSgyvGMx0LZCCz2A4VdXLBQWsDrGE`).then(data => {
            console.log(data.data)
            setArticles(data.data.articles)
        })
    }, [])

    return <>
        <h2>NY TIMES News</h2>
        <hr />
        <div className="d-flex flex-column align-items-center">
            {articles.map( (article, index) => {
                let newsArticle = article
                return (
                    <div className="card mb-3 p-5" style={
                        {
                            width:"70%"
                        }
                    } key={"newItem"+ index+1}>
                        <img alt="News Image" className="news-img card-img-top" src={newsArticle.urlToImage}   />
                        <div className="card-body">
                            {/* <div className="news-item"></div> */}
                            <h3><a href={newsArticle.url.toString()}> {newsArticle.title} </a></h3>
                            <p>{newsArticle.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
}


export default News