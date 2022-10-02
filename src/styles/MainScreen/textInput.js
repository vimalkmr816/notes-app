import { createUseStyles } from "react-jss";

export default createUseStyles ( {
	textInputContainer: {
		margin       : "1rem",
		padding      : "1rem",
		borderRadius : "10px",
		border       : "2px solid"
	},
	inputSection: {
		resize     : "none",
		marginTop  : "1rem",
		background : "transparent",
		border     : "none",
		"&:focus"  : {
			outline: 0
		}
	}
} );
