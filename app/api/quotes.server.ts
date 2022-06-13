import { readFile } from "fs/promises";

export function getQuotes(): Promise<string[]> {
      return readFile("./app/assets/quotes.txt")
        .then(
          res => res
            .toLocaleString()
            .split("\n")
            .filter(Boolean)
        );
}

