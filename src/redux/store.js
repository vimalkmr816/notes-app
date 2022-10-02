import { configureStore } from "@reduxjs/toolkit";
import noteDataSlice      from "./noteDataSlice";

export const store = configureStore ( {
	reducer: {
		noteData: noteDataSlice
	}
} );
