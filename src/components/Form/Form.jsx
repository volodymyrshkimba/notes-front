import { useNotes } from "../../context/notesContext";

import { FiSearch } from "react-icons/fi";

import css from "./Form.module.css";

const Form = () => {
  const { addNote } = useNotes();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const title = form.elements.title.value;
    const content = form.elements.content.value;

    addNote({ title, content });

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <button className={css.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={css.input}
        placeholder="Title"
        name="title"
        required
        autoFocus
      />
      <input
        className={css.input}
        placeholder="What do you want to note?"
        name="content"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
