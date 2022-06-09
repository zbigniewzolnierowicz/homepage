const quotesURL = new URL('./assets/quotes.txt', import.meta.url).href

const randomElementIndex = (items: any[]): number => Math.floor(Math.random() * items.length);

export const loadQuoteMachine = async (element: HTMLElement) => {
  const quotes = await fetch(quotesURL)
    .then(res => res.text())
    .then(
      res => res
        .split("\n")
        .filter(Boolean)
    );

  const chosenQuoteIndex = randomElementIndex(quotes);
  const chosenQuote = quotes[chosenQuoteIndex];

  console.groupCollapsed("Available quotes")
  console.table(quotes.map((quote, i) => ({ quote: quote, chosen: i === chosenQuoteIndex ? true : null })))
  console.groupEnd()

  element.innerText = chosenQuote;
}
