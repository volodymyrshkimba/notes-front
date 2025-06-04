import { Formik, Form, Field, ErrorMessage } from "formik";

import { useNotes } from "../../context/notesContext";

import { noteSchema } from "../../validation/notes";

import { IoAddCircleOutline } from "react-icons/io5";
import css from "./NoteForm.module.css";

const NoteForm = () => {
  const { addNote } = useNotes();

  const handleSubmit = (values, { resetForm }) => {
    addNote(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ title: "", content: "" }}
      validationSchema={noteSchema}
      validateOnBlur={false}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <button className={css.button} type="submit">
          <IoAddCircleOutline size="22px" />
        </button>

        <div className={css.inputWrapper}>
          <Field
            className={css.input}
            name="title"
            placeholder="Title"
            autoFocus
          />
          <ErrorMessage name="title" component="span" className={css.error} />
        </div>

        <div className={css.inputWrapper}>
          <Field
            className={css.input}
            name="content"
            placeholder="What do you want to note?"
          />
          <ErrorMessage name="content" component="span" className={css.error} />
        </div>
      </Form>
    </Formik>
  );
};

export default NoteForm;
