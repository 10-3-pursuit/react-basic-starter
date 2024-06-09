import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { getNYTArticles } from "./fetch";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuContent, NavigationMenuLink } from "@radix-ui/react-navigation-menu";

const Section = ({ sections }) => {
    const [articles, setArticles] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getNYTArticles(sections[id]).then((arts) => {
            setArticles(arts);
        }).catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link to={'/'}>
                            <NavigationMenuLink>Home</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            {/* <Link to='/'>
            </Link> */}
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