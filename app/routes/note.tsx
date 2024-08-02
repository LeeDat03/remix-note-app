import { json, redirect, useLoaderData } from "@remix-run/react";
import NewNote from "~/components/new-note";
import NoteList from "~/components/note-list";
import { getStoredNotes, Note, storeNotes } from "~/data/note";

const NotePage = () => {
  const { notes } = useLoaderData<typeof loader>();
  return (
    <main>
      <NewNote />
      <NoteList notes={notes} />
    </main>
  );
};

export async function loader() {
  const notes: Note[] = await getStoredNotes();
  return json({ notes });
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const note: Note = {
    title: formData.get("title") as string,
    content: formData.get("content") as string,
    id: new Date().toISOString(),
  };
  // add validation

  const existingNote: Note[] = await getStoredNotes();
  const updateNote = [...existingNote, note];

  await storeNotes(updateNote);

  // return response
  return redirect("/note");
}

export default NotePage;
