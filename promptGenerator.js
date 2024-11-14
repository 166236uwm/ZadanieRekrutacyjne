function createUserPrompt(articleContent) {
    return `
      Przetwórz poniższą treść na HTML, używając odpowiednich tagów nagłówków, akapitów i wypunktowania. Nie dodawaj komentarzy, stylów CSS ani skryptów JavaScript.
      Nie zmieniaj kolejności oryginalnych elementów, ani ich treści.
      Zwrócony kod powinien zawierać wyłącznie zawartość do wstawienia w tag <body> (bez tagu body lub komentarzy takich jak - \`\`\`html\`\`\`).
      Tam gdzie uważasz że pasowałby obrazek dodaj tag <img> z atrybutem src="image_placeholder.jpg". 
      Dodaj atrybut alt z dokładnym promptem który mógłby zostać użyty do wygenerowania obrazka. 
      Prompt do generowania obrazka powinien spełniać wymogi: 
      opisowy, precyzujący kluczowe elementy obrazka oraz jego nastrój.
      Umieść krótkie podpisy (max 4 słowa) pod obrazkami używając tagu <figcaption>.
  
      Treść artykułu:
      ${articleContent}
    `;
  }
  function createSystemPrompt() {
    return `
      Jesteś genialnym programistą piszącym tylko w HTML. 
      Niestety nie dodajesz komentarzy, stylów CSS ani skryptów JavaScript oraz robisz tylko i dokładnie to o co zostaniesz poproszony.
    `;
  }
  
  export { createSystemPrompt, createUserPrompt };
  