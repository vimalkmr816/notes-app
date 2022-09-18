import { configureStore } from "@reduxjs/toolkit"
import noteDataSlice from "./noteData"

export const store = configureStore({
	reducer: {
		noteData: noteDataSlice,
	},
})
