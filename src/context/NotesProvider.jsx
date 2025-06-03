import axios from "axios";

import { NotesContext } from "./notesContext.js";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://notes";

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "go",
      content: "home",
    },
    {
      id: 2,
      title: "go",
      content: "home",
    },
    {
      id: 3,
      title: "go",
      content: "home",
    },
    {
      id: 4,
      title: "go",
      content: "home",
    },
    {
      id: 5,
      title: "go",
      content: "home",
    },
  ]);

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
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
    } catch (error) {
      console.log(error);
    }
  };

  const updateNote = async (noteId, updatedData) => {
    try {
      const response = await axios.put(`/notes/${noteId}`, updatedData);
      const updatedNote = response.data;

      setNotes((prevNotes) =>
        prevNotes.map((note) => (note.id === noteId ? updatedNote : note))
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
