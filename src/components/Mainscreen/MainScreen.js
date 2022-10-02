import React     from "react";
import useStyles from "../../styles/mainScreen";
import TextInput from "./TextInput";

const MainScreen = props => {
	const { setNote, note } = props;
	const classes           = useStyles ();

	return (
		<div className = { classes.mainScreenContainer }>
			<TextInput
				label = { "Title" }
				note = { note }
				setNote = { setNote }
			/>

			<TextInput label = { "Text" }
				note = { note }
				setNote = { setNote }
			/>

		</div>
	);
};

export default MainScreen;
