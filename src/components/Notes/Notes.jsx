import { useState } from "react";
import EditForm from "../EditForm/EditForm";
import NoteForm from "../NoteForm/NoteForm";
import NoteList from "../NoteList/NoteList";

const Notes = () => {
  const [noteToEdit, setNoteToEdit] = useState(null);

  const handleChangeEditing = (note) => {
    setNoteToEdit(note);
  };

  const cancelUpdate = () => {
    setNoteToEdit(null);
  };

  return (
    <>
      {noteToEdit ? (
        <EditForm noteToEdit={noteToEdit} cancelUpdate={cancelUpdate} />
      ) : (
        <NoteForm />
      )}

      <NoteList handleChangeEditing={handleChangeEditing} />
    </>
  );
};

export default Notes;
