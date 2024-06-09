const openAiKey = import.meta.env.VITE_OPENAI_API_KEY;
console.log(openAiKey)

// const openAiKey = import.meta.env.OPENAI_API_KEY
import OpenAI from "openai"
//using caption and description

const caption = "Crowd work has grown more common, with some comedians now focusing their acts on it and sharing clips of their exchanges with audience members. But some comics say it takes away from the craft."
const description = "Gianmarco Soresi, a comedian, talking to the audience at Sesh Comedy in New York City. “To be a stand-up comedian in today’s world, you have to be a content machine,” he said. "

const openai = new OpenAI({apiKey:openAiKey, dangerouslyAllowBrowser: true}); 

 export default async function main() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: `Based on the caption, ${caption}, and description,${description},
            find the related news article and summarize it maximum 400 words and understandable for a 8th grader and below`}],
            model: 'gpt-3.5-turbo',
    });

    console.log(completion.choices[0].message.content);
    return completion.choices[0].message.content;
    
}

main();