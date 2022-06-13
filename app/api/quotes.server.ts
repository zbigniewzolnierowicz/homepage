import { readFile } from "fs/promises";
import { join as joinPath } from "path";

export function getQuotes(): Promise<string[]> {
  return readFile(joinPath(__dirname, "../public/quotes.txt"))
    .then(
      res => res
        .toLocaleString()
        .split("\n")
        .filter(Boolean)
    );
}

