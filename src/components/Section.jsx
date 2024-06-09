import { useState, useEffect, createContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import { getNYTArticles } from "./fetch";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuContent, NavigationMenuLink, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";
import './Section.css';
import main from './OpenAi'



 export const SummaryContext = createContext(null)
//  const navigate = useNavigate();
const Section = ({ sections }) => {
     const [summary, setSummary] = useState([])
    const [articles, setArticles] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        
        getNYTArticles(sections[id]).then((results) => {
            setArticles(results);
        
        }).catch((err) => console.error(err));
    }, []);

    // const handleClick = () => {
    //     main().then((response => setSummary(response)))
    //      navigate('/sections/summary')
    //  }

    return (
         <SummaryContext.Provider value = {{summary, setSummary}}>
        <div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink>
                        <Link className='home-link' to={'/'}>Home</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <h1>{sections[id]}</h1>
            {articles.length > 0 && articles.map(article =>
                <li key={article.slug_name}>
                    <Link to={article.url} target="_blank">{article.title}</Link>
                    <p>{article.abstract}</p>
                    <button onClick={()=> handleClick()}>Summarize for 8th Graders + Below</button>
                    <button>Summarize for High Schoolers</button>
                    <button>Summarize for Adults</button>
                </li>)}
        </div>
         </SummaryContext.Provider> 
    )
}

export default Section; 