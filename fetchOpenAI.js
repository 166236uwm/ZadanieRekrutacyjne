import OpenAI from "openai";
import dotenv from "dotenv";
import fs from 'fs';

const openAIClient = new OpenAI({
    apiKey: dotenv.config().parsed.OPENAI_API_KEY
})

async function sendToOpenAI(systemPrompt, userPrompt) {
    const response = await openAIClient.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "system",
                content: systemPrompt
            },
            {
                role: "user",
                content: userPrompt
            }
        ]
    })
    fs.writeFileSync('response.json', JSON.stringify(response, null, 2));
    return (response.choices[0].message.content);
}

export { sendToOpenAI };
