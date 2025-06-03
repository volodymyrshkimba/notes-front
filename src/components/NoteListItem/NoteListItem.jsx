import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";

import css from "./NoteListItem.module.css";
import { useNotes } from "../../context/notesContext";

const NoteListItem = ({ id, count, title, content, handleChangeEditing }) => {
  const { deleteNote } = useNotes();

  return (
    <li className={css.box}>
      <p>Note #{count}</p>
      <p>{title}</p>
      <p>{content}</p>
      <button
        onClick={() => deleteNote(id)}
        className={css.deleteButton}
        type="button"
      >
        <RiDeleteBinLine size={24} />
      </button>

      <button
        onClick={() => handleChangeEditing({ id, title, content })}
        className={css.editButton}
        type="button"
      >
        <RiEdit2Line size={24} />
      </button>
    </li>
  );
};

export default NoteListItem;
