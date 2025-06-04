import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";

import css from "./NoteListItem.module.css";
import { useNotes } from "../../context/notesContext";

const NoteListItem = ({
  _id,
  count,
  title,
  content,
  createdAt,
  handleChangeEditing,
}) => {
  const { deleteNote } = useNotes();

  return (
    <li className={css.box}>
      <p className={css.count}>Note #{count}</p>
      <p className={css.count}>
        {new Date(createdAt).toISOString().split("T")[0]}
      </p>
      <p className={css.title}>{title}</p>
      <p>{content}</p>
      <button
        onClick={() => deleteNote(_id)}
        className={css.deleteButton}
        type="button"
      >
        <RiDeleteBinLine size={24} />
      </button>

      <button
        onClick={() => handleChangeEditing({ _id, title, content, createdAt })}
        className={css.editButton}
        type="button"
      >
        <RiEdit2Line size={24} />
      </button>
    </li>
  );
};

export default NoteListItem;
