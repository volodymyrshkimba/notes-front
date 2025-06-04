import axios from "axios";

import { NotesContext } from "./notesContext.js";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "http://localhost:3000";

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getAllNotes = async () => {
      try {
        const response = await axios.get("/notes");
        setNotes(response.data);
      } catch (error) {
        console.log(error);
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

  const updateNote = async (noteId, updatedData) => {
    try {
      const response = await axios.patch(`/notes/${noteId}`, updatedData);
      const updatedNote = response.data;

      setNotes((prevNotes) =>
        prevNotes.map((note) => (note._id === noteId ? updatedNote : note))
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, updateNote }}>
      {children}
    </NotesContext.Provider>
  );
};
