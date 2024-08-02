import fs from "fs/promises";

export interface Note {
  title: string;
  content: string;
  id: string;
}

export async function getStoredNotes() {
  const rawFileContent = await fs.readFile("notes.json", { encoding: "utf-8" });
  const data = JSON.parse(rawFileContent);
  const storedNotes: Note[] = data.notes ?? [];
  return storedNotes;
}

export function storeNotes(notes: Note[]) {
  return fs.writeFile("notes.json", JSON.stringify({ notes: notes || [] }));
}
