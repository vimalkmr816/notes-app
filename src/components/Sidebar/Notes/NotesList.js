import React from "react"
import { useSelector } from "react-redux"
import useStyles from "../../../styles/Sidebar/notesList"
import NotesCard from "./NotesCard"
const NotesList = () => {
	const classes = useStyles()
	const notesList = useSelector(state => state.noteData.data)
	return (
		<div className={classes.notesListWrapper}>
			{notesList.map((note, ind) => (
				<NotesCard text={note.text} title={note.title} key={ind} date={note.date} />
			))}
		</div>
	)
}

export default NotesList
