import { useState } from "react";

import EditForm from "../EditForm/EditForm";
import NoteForm from "../NoteForm/NoteForm";
import NoteList from "../NoteList/NoteList";
import FilterInputs from "../FilterInputs/FilterInputs";
import Loader from "../Loader/Loader";

import { useNotes } from "../../context/notesContext";

const Notes = () => {
  const { loading } = useNotes();

  const [noteToEdit, setNoteToEdit] = useState(null);
  const [searchKeys, setSearchKeys] = useState({
    titleKey: "",
    dateKey: "",
  });

  const handleChangeEditing = (note) => {
    setNoteToEdit(note);
  };

  const cancelUpdate = () => {
    setNoteToEdit(null);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {noteToEdit ? (
            <EditForm noteToEdit={noteToEdit} cancelUpdate={cancelUpdate} />
          ) : (
            <NoteForm />
          )}

          <FilterInputs searchKeys={searchKeys} setSearchKeys={setSearchKeys} />

          <NoteList
            searchKeys={searchKeys}
            handleChangeEditing={handleChangeEditing}
          />
        </>
      )}
    </>
  );
};

export default Notes;
