// const API_KEY = import.meta.env.VITE_API_KEY;
import { XMLParser } from "fast-xml-parser";

const newApiKey = 'SaLgMxPpyGLGmk7XmEs2GjqaBKVudsd2'
export async function getNYTArticles (section) {
    const response = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/${section}.json?api-key=${newApiKey}`);
    const data = await response.json()
    
    return data.results;
    // return fetch(`https://api.nytimes.com/svc/news/v3/content/all/${section}.json?api-key=${newApiKey}`)
    //     .then(response => console.log(response.json()))
    //     .then(data => console.log(data))
    // //    => console.log(data));
}