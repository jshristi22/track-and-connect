import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { IContact } from "../types";

interface IState {
  contacts: IContact[];
}

const initialState: IState = {
  contacts: [],
};

export const contactSlice = createSlice({
  name: "contact",
  initialState: initialState,
  reducers: {
    upsertContact: (state, action) => {
      // update contact
      if (action.payload.id) {
        const data = state.contacts.map((contact) => {
          if (contact.id === action.payload.id) {
            return action.payload;
          }
          return contact;
        });
        state.contacts = [...data];
      }
      // Add contact
      else
        state.contacts = [
          ...state.contacts,
          { ...action.payload, id: uuidv4() },
        ];
    },
    deleteContact: (state, action) => {
      const data = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
      state.contacts = [...data];
    },
  },
});

export const { upsertContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
