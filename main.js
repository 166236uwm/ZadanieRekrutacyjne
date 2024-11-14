import { sendToOpenAI } from './fetchOpenAI.js';
import { readArticle, saveHTML } from './fileHandler.js';
import { createSystemPrompt, createUserPrompt } from './promptGenerator.js';

async function generateHTML() {
  try {
    const articleContent = await readArticle('./Zadanie dla JJunior AI Developera - tresc artykulu.txt');
    const systemPrompt = createSystemPrompt();
    const userPrompt = createUserPrompt(articleContent);
    const htmlContent = await sendToOpenAI(systemPrompt, userPrompt);
    await saveHTML(htmlContent, './artykul.html');
    console.log("HTML content successfully generated and saved.");
  } catch (error) {
    console.error("Error generating HTML:", error);
  }
}

generateHTML();
