import axios from "axios";

import { NotesContext } from "./notesContext.js";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://notes-back-8271.onrender.com";

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const getAllNotes = async () => {
      try {
        setloading(true);
        const response = await axios.get("/notes");
        setNotes(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    };
    getAllNotes();
  }, []);

  const addNote = async (data) => {
    try {
      const response = await axios.post("/notes", data);
      const newNote = response.data;
      setNotes((prevNotes) => [...prevNotes, newNote]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = async (noteId) => {
    try {
      await axios.delete(`/notes/${noteId}`);
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== noteId));
    } catch (error) {
      console.log(error);
    }
  };

  const updateNote = async (updatedData) => {
    try {
      const response = await axios.put(
        `/notes/${updatedData._id}`,
        updatedData
      );
      const updatedNote = response.data;

      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note._id === updatedData._id ? updatedNote : note
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NotesContext.Provider
      value={{ notes, addNote, deleteNote, updateNote, loading }}
    >
      {children}
    </NotesContext.Provider>
  );
};
