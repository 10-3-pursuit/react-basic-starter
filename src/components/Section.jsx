import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { getNYTArticles } from "./fetch";
// import { main } from "./openai-api";

const Section = ({ sections }) => {
    const [articles, setArticles] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getNYTArticles(sections[id]).then((arts) => {
            setArticles(arts);
        }).catch((err) => console.error(err));
        // const response = main(articles[0].link);
        // console.log(response);
    }, []);

    return (
        <div>
            <Link to='/'>Home</Link>
            <h1>{sections[id]}</h1>
            {articles.length > 0 && articles.map(article =>
                <li key={article.guid}>
                    <Link to={article.link} target="_blank">{article.title}</Link>
                    <p>{article.description}</p>
                    <p>{article['media:description']}</p>
                </li>)}
        </div>
    )
}

export default Section  