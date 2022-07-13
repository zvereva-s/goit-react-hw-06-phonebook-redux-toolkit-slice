import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
    items: [],
    filter: ""
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        add: {
            reducer: (store, { payload }) => {
                store.items.push(payload);
            },
            prepare: (data) => {
                return {
                    payload: { ...data, id: nanoid() }
                }
            },
        },
        remove: (store, { payload }) => {
            store.items = store.items.filter(item => item.id !== payload)
        },
        setFilter: (store, { payload }) => {store.filter = payload},
    }
})

export const { add, remove, setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;