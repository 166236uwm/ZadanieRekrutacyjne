import fs from 'fs/promises';

async function readArticle(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    return content;
  } catch (error) {
    throw new Error(`Error reading file: ${error.message}`);
  }
}

async function saveHTML(htmlContent, filePath) {
  try {
    await fs.writeFile(filePath, htmlContent);
    console.log(`HTML saved to ${filePath}`);
  } catch (error) {
    throw new Error(`Error saving HTML: ${error.message}`);
  }
}

export { readArticle, saveHTML };
