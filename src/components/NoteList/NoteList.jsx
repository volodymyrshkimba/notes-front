import { useNotes } from "../../context/notesContext";

import NoteListItem from "../NoteListItem/NoteListItem";

import css from "./NoteList.module.css";

const NoteList = ({ handleChangeEditing, searchKeys }) => {
  const { notes } = useNotes();

  const filteredNotes = notes
    .filter((note) =>
      note.title.toLowerCase().includes(searchKeys.titleKey.toLowerCase())
    )
    .filter((note) => {
      if (!searchKeys.dateKey) return true;

      const noteDate = new Date(note.createdAt).toISOString().split("T")[0];
      return noteDate === searchKeys.dateKey;
    });

  return (
    <ul className={css.list}>
      {filteredNotes.map((note, i) => (
        <NoteListItem
          key={note._id}
          title={note.title}
          content={note.content}
          createdAt={note.createdAt}
          _id={note._id}
          count={i + 1}
          handleChangeEditing={handleChangeEditing}
        />
      ))}
    </ul>
  );
};

export default NoteList;
