import { Formik, Form, Field, ErrorMessage } from "formik";

import { useNotes } from "../../context/notesContext";
import { noteSchema } from "../../validation/notes";

import { RiSaveLine } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import css from "./EditForm.module.css";

const EditForm = ({ noteToEdit, cancelUpdate }) => {
  const { updateNote } = useNotes();

  const handleSubmit = async (values) => {
    const { title, content } = values;

    if (
      noteToEdit.title.trim() === title.trim() &&
      noteToEdit.content.trim() === content.trim()
    ) {
      return;
    }

    await updateNote(noteToEdit.id, { title, content });
    cancelUpdate();
  };

  return (
    <Formik
      initialValues={{
        title: noteToEdit.title,
        content: noteToEdit.content,
      }}
      validationSchema={noteSchema}
      validateOnBlur={false}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <button className={css.submitButton} type="submit">
          <RiSaveLine color="green" size="16px" />
        </button>

        <button onClick={cancelUpdate} className={css.editButton} type="button">
          <MdOutlineCancel color="red" size="16px" />
        </button>

        <div className={css.inputWrapper}>
          <Field
            className={css.input}
            name="title"
            placeholder="New title"
            autoFocus
          />
          <ErrorMessage name="title" component="div" className={css.error} />
        </div>

        <div className={css.inputWrapper}>
          <Field className={css.input} name="content" placeholder="New note" />
          <ErrorMessage name="content" component="div" className={css.error} />
        </div>
      </Form>
    </Formik>
  );
};

export default EditForm;
