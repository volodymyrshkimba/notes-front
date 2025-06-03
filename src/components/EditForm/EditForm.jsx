import { RiSaveLine } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";

import css from "./EditForm.module.css";
import { useNotes } from "../../context/notesContext";

const EditForm = ({ noteToEdit, cancelUpdate }) => {
  const { updateNote } = useNotes();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;

    const title = form.elements.title.value;
    const content = form.elements.content.value;

    await updateNote(noteToEdit.id, { title, content });
    cancelUpdate();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <button className={css.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button
        onClick={() => cancelUpdate()}
        className={css.editButton}
        type="button"
      >
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        className={css.input}
        placeholder="New title"
        name="title"
        defaultValue={noteToEdit.title}
        required
        autoFocus
      />

      <input
        className={css.input}
        placeholder="New note"
        name="content"
        defaultValue={noteToEdit.content}
        required
        autoFocus
      />
    </form>
  );
};

export default EditForm;
