import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NoteData } from "../../components/Types";
import { Note } from "../../components/Types";
import { v4 } from "uuid";

const initialState: Note[] = [];

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<NoteData>) => {
      const newNote: Note = {
        ...action.payload,
        id: v4(),
      };
      state.push(newNote);
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((note) => note.id === action.payload);
      state.splice(index, 1);
    },
    updateNote: (state, action: PayloadAction<Note>) => {
      const index = state.findIndex((note) => note.id === action.payload.id);
      state.splice(index, 1, action.payload);
    },
  },
});

export const { addNote, deleteNote, updateNote } = noteSlice.actions;
export default noteSlice.reducer;
