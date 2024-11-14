# Zadanie Rekrutacyjne
## Opis działania
W main.js Zarządzamy całą aplikacją. Najpierw za pomocą
> const articleContent = await readArticle('./Zadanie dla JJunior AI Developera - tresc artykulu.txt');

wczytujemy zawartość artykułu. Następnie generujemy prompty

> const systemPrompt = createSystemPrompt(); \
> const userPrompt = createUserPrompt(articleContent);

To wsztstko łączymy w całość wysyłając zapytanie do OpenAI

> const htmlContent = await sendToOpenAI(systemPrompt, userPrompt);

W przypadku sukcesu odpowiedź zapisujemy do pliku html. 

> await saveHTML(htmlContent, './artykul.html');

Widoczne rozbicie na różne pliki zdecydowanie ułatwiło proces inżynierii programu. \
promptGenerator.js jest w zasadzie zbiorem funkcji zwracających wcześniej napisany tekst. \
Takie podejście ułatwiło testowanie różnych promptów w celu uzyskania nejlepszego efektu. \

Podczas procesu tworzenia użyto paczek więc przed uruchomieniem 
