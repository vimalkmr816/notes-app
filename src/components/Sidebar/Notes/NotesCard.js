import DeleteIcon      from "@mui/icons-material/Delete";
import { IconButton }  from "@mui/material";
import Card            from "@mui/material/Card";
import CardActions     from "@mui/material/CardActions";
import CardContent     from "@mui/material/CardContent";
import Typography      from "@mui/material/Typography";
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
		<Card sx = { { minWidth: 275 } }
			variant = "outlined"
		>
			<CardContent className = { classes.notesCardWrapper }>

				<Typography className = { classes.notesCardTitle }
					component = "div"
					variant = "h5"
				>
					{title}
				</Typography>

				<Typography gutterBottomx
					className = { classes.notesCardText }
					color = "text.secondary"
				>
					{text}
				</Typography>

				<Typography color = "text.secondary"
					sx = { { mt: 1.5 } }
				>
					{date}
				</Typography>
			</CardContent>

			<CardActions>
				<IconButton
					aria-label = "delete"
					onClick = { () => handleDeleteNote ( id ) }
				>
					<DeleteIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default NotesCard;
