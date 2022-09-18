import DeleteIcon from "@mui/icons-material/Delete"
import React, { useContext } from "react"
import { useDispatch } from "react-redux"
import { AppContext } from "../../../App"
import { deleteNote } from "../../../redux/noteData"
import useStyles from "../../../styles/Sidebar/notesCard"
const NotesCard = props => {
	const uuid = useContext(AppContext)
	const { title, text, date } = props
	const dispatch = useDispatch()
	const handleDeleteNote = title => {
		dispatch(deleteNote(title))
	}
	const classes = useStyles()

	return (
		<div className={classes.notesCardWrapper}>
			<h4 className={classes.notesCardTitle}>
				{title.substr(0, 10)}....
				<button onClick={() => handleDeleteNote(title)} className={classes.deleteBtn}>
					<DeleteIcon />
				</button>
			</h4>
			<p className={classes.notesCardText}>{text}</p>
			<span className={classes.notesCardDate}>{date}</span>
		</div>
	)
}

export default NotesCard
