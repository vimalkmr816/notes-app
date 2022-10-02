import React           from "react";
import { useDispatch } from "react-redux";
import uuid            from "react-uuid";
import { addNote }     from "../../redux/noteDataSlice";
import useStyles       from "../../styles/Sidebar";
import NotesList       from "./Notes/NotesList";
import SortFilter      from "./sidebarMenu/SortFilter";
import SidebarMenu     from "./sidebarMenu/SidebarMenu";
const Sidebar = props => {
	const { note } = props;
	const dispatch = useDispatch ();

	const handleAddNote = () => {
		if ( note.title !== "" || note.text !== "" ) dispatch ( addNote ( { ...note, id: uuid () } ) );
	};
	const classes       = useStyles ();

	return (
		<div className = { classes.sidebarContainer }>
			<SidebarMenu />

			<SortFilter />

			<div>
				<button className = { classes.addBtn }
					onClick = { handleAddNote }
				>
					ADD NOTE
				</button>

				<NotesList></NotesList>
			</div>
		</div>
	);
};

export default Sidebar;
