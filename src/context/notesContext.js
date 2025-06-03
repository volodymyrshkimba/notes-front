import { createContext, use } from "react";

export const NotesContext = createContext();

export const useNotes = () => use(NotesContext);
