import { useNotes } from "../../context/notesContext";
import NoteListItem from "../NoteListItem/NoteListItem";

import css from "./NoteList.module.css";

const NoteList = ({ handleChangeEditing }) => {
  const { notes } = useNotes();

  return (
    <ul className={css.list}>
      {notes.map((note, i) => (
        <NoteListItem
          key={note.id}
          title={note.title}
          content={note.content}
          id={note.id}
          count={i + 1}
          handleChangeEditing={handleChangeEditing}
        />
      ))}
    </ul>
  );
};

export default NoteList;
