import React from "react"
import { useDispatch } from "react-redux"

//components
import { addNote } from "../../redux/noteData"
import NotesList from "./Notes/NotesList"

//styles
import useStyles from "../../styles/Sidebar"

const Sidebar = props => {
	const { note } = props
	const dispatch = useDispatch()

	const handleAddNote = () => {
		if (note.title !== "" || note.text !== "") dispatch(addNote(note))
	}
	const classes = useStyles()
	return (
		<div className={classes.sidebarContainer}>
			<button className={classes.addBtn} onClick={handleAddNote}>
				ADD NOTE
			</button>
			<NotesList></NotesList>
		</div>
	)
}

export default Sidebar
