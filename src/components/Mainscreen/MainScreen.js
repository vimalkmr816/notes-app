import React, { useState } from "react";
import useStyles           from "../../styles/Mainscreen";
import MarkdownScreen      from "./MarkdownText";
import PlainText           from "./PlainText";

const MainScreen = props => {
	const [ markdown, setMarkdown ] = useState ( null );
	const { setNote, note }         = props;
	const classes                   = useStyles ();

	return (
		<div className = { classes.mainScreenContainer }>
			<MarkdownScreen note = { note }
				setMarkdown = { setMarkdown }
				setNote = { setNote }
			/>

			<PlainText markdown = { markdown } />
		</div>
	);
};

export default MainScreen;
