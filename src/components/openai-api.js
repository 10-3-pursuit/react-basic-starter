// const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
// console.log(OPENAI_API_KEY);

// import OpenAI from "openai";

// const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

// export async function main(articleLink) {
//   const completion = await openai.chat.completions.create({
//     messages: [
//         { role: "system", content: "You are a helpful assistant." },
//         { role: "user", content: `Summarize the following article: ${articleLink}` }
//     ],
//     model: "gpt-3.5-turbo",
//   });

//   return completion.choices[0];
// }