import { Form } from "@remix-run/react";
import "./new-note.css";

const NewNote = () => {
  return (
    <Form id="note-form" method="post">
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" required />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea name="content" id="content" rows={5} required />
      </p>
      <div className="form-action">
        <button>Add Note</button>
      </div>
    </Form>
  );
};

export default NewNote;
