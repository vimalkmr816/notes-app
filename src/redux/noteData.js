import { createSlice } from "@reduxjs/toolkit"
const initialState = { data: [] }

export const noteDataSlice = createSlice({
	name: "noteData",
	initialState,
	reducers: {
		addNote: (state, action) => {
			state.data.push(action.payload)
		},
		deleteNote: (state, action) => {
			state.data = state.data.filter(note => note.title !== action.payload)
		},
		// hideNote: (state, action) => {
		//     state.data  =
		// },
	},
})

export const { addNote, deleteNote, hideNote } = noteDataSlice.actions

export default noteDataSlice.reducer
