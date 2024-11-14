import OpenAI from "openai";
import dotenv from "dotenv";

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
    });
    return (response.choices[0].message.content);
}

export { sendToOpenAI };
