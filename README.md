# Zadanie Rekrutacyjne
## Start projektu
Do włączenia projektu potrzebny będzie npm. \
Po pobraniu plików projektu w głównym folderze należy stworzyć plik `.env` i dodać w nim następującą linię
> OPENAI_API_KEY=Twój_klucz_dostępu_do_API_OpenAI

następnie należy włączyć skrypt powershell `start.ps1` lub wprowadzić następujace komendy do terminala:

> npm install\
> node main.js

## Opis działania
W `main.js` zarządzamy całą aplikacją. Najpierw za pomocą
> const articleContent = await readArticle('./Zadanie dla JJunior AI Developera - tresc artykulu.txt');

wczytujemy zawartość artykułu. Następnie generujemy prompty

> const systemPrompt = createSystemPrompt(); \
> const userPrompt = createUserPrompt(articleContent);

To wsztstko łączymy w całość wysyłając zapytanie do OpenAI

> const htmlContent = await sendToOpenAI(systemPrompt, userPrompt);

W przypadku sukcesu odpowiedź zapisujemy do pliku html. 

> await saveHTML(htmlContent, './artykul.html');

Widoczne rozbicie na różne pliki zdecydowanie ułatwiło proces inżynierii programu. \
`promptGenerator.js` jest w zasadzie zbiorem funkcji zwracających wcześniej napisany tekst. \
Takie podejście ułatwiło testowanie różnych promptów w celu uzyskania nejlepszego efektu. 

