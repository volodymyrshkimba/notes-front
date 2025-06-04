import { useNotes } from "../../context/notesContext";

import NoteListItem from "../NoteListItem/NoteListItem";

import css from "./NoteList.module.css";

const NoteList = ({ handleChangeEditing }) => {
  const { notes } = useNotes();

  return (
    <ul className={css.list}>
      {notes.map((note, i) => (
        <NoteListItem
          key={note._id}
          title={note.title}
          content={note.content}
          id={note._id}
          count={i + 1}
          handleChangeEditing={handleChangeEditing}
        />
      ))}
    </ul>
  );
};

export default NoteList;
