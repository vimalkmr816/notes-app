import React         from "react";
import ReactMarkdown from "react-markdown";
import useStyles     from "../../styles/MainScreen/plainText";

const PlainText = props => {
	const { markdown } = props;
	const classes      = useStyles ();

	return (
		<div className = { classes.plainTextContainer }>
			<ReactMarkdown>
				{markdown}
			</ReactMarkdown>
		</div>
	);
};

export default PlainText;
