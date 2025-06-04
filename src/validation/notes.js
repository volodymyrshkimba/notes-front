import * as Yup from "yup";

export const noteSchema = Yup.object().shape({
  title: Yup.string().required("Please enter note title"),
  content: Yup.string().required("Please enter note content"),
});
