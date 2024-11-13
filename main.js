import { sendToOpenAI } from './fetchOpenAI.js';
import { readArticle, saveHTML } from './fileHandler.js';
import { createPrompt } from './promptGenerator.js';

async function generateHTML() {
  try {
    const articleContent = await readArticle('./Zadanie dla JJunior AI Developera - tresc artykulu.txt');
    const prompt = createPrompt(articleContent);
    const htmlContent = await sendToOpenAI(prompt);
    await saveHTML(htmlContent, './artykul.html');
    console.log("HTML content successfully generated and saved.");
  } catch (error) {
    console.error("Error generating HTML:", error);
  }
}

generateHTML();
