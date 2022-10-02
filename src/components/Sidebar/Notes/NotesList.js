import React           from "react";
import { useSelector } from "react-redux";
import useStyles       from "../../../styles/Sidebar/notesList";
import NotesCard       from "./NotesCard";
const NotesList = () => {
	const classes   = useStyles ();
	const notesList = useSelector ( state => state.noteData.data );

	return (
		<div className = { classes.notesListWrapper }>
			{notesList.map ( ( note, ind ) => (
				<NotesCard key = { ind }
					date = { note.date }
					id = { note.id }
					text = { note.text }
					title = { note.title }
				/>
			) )}
		</div>
	);
};

export default NotesList;
