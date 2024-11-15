function createUserPrompt(articleContent) {
    return `
      Poniżej jest artykuł, przetwórz go odpowiednio, aby można było wkleić go w <body> strony internetowej. Nie usuwaj oryginalnych elementów ani ich treści.
      Tam gdzie uważasz że pasowałby obrazek dodaj tag <img> z atrybutem src="image_placeholder.jpg", umieść obrazek i opis obrazka w <figure>.
      Dodaj atrybut alt z dokładnym promptem który mógłby zostać użyty do wygenerowania obrazka. 
      Prompt do generowania obrazka powinien spełniać wymogi: 
      opisowy, precyzujący kluczowe elementy obrazka oraz jego nastrój.
      Umieść krótkie podpisy (max 4 słowa) pod obrazkami używając tagu <figcaption>.
      Tak przygotowany <figure> umieść w jednym <div> wraz z <p> do którego odnosi się obrazek.  
      Artykuł powinien mieć tyle obrazków ile jest paragrafów w oryginalnym tekście oraz tyle divów ile jest obrazków.
      Jeden akapit powinien wyglądać tak: 
      <h1>tytuł akapitu</h1>
      <div>
        <p>teść</p>
        <figure>
          <img>
          <figcaption></figcaption>
        </figure>
      </div>
      Jeżeli nie sprecyzowałem co zrobić z niespodziewanym elementem, zdecyduj samodzielnie co z nim zrobić ale pod żadnym pozorem nie usuwaj go.
      Treść artykułu:
      ${articleContent}
    `;
  }
  function createSystemPrompt() {
    return `
      Jesteś genialnym programistą piszącym tylko w HTML. 
      Nie dodawaj komentarzy, stylów CSS ani skryptów JavaScript. Nie zmieniaj kolejności oryginalnych elementów, ani ich treści.
      Zwrócony kod powinien zawierać wyłącznie zawartość do wstawienia w tag <body> (bez tagu body lub komentarzy takich jak - \`\`\`html\`\`\`).
    `;
  }
  
  export { createSystemPrompt, createUserPrompt };
  