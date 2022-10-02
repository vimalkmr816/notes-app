import DeleteIcon      from "@mui/icons-material/Delete";
import React           from "react";
import { useDispatch } from "react-redux";
import { deleteNote }  from "../../../redux/noteDataSlice";
import useStyles       from "../../../styles/Sidebar/notesCard";
const NotesCard = props => {

	const { title, text, date, id } = props;

	const dispatch         = useDispatch ();
	const handleDeleteNote = id => {
		dispatch ( deleteNote ( id ) );
	};
	const classes          = useStyles ();

	return (
		<div className = { classes.notesCardWrapper }>
			<h4 className = { classes.notesCardTitle }>
				{title.substr ( 0, 10 )}
				....

				<button className = { classes.deleteBtn }
					onClick = { () => handleDeleteNote ( id ) }
				>
					<DeleteIcon />
				</button>
			</h4>

			<p className = { classes.notesCardText }>
				{text}
			</p>

			<span className = { classes.notesCardDate }>
				{date}
			</span>
		</div>
	);
};

export default NotesCard;