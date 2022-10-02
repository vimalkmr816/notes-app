import { createUseStyles } from "react-jss";

export default createUseStyles ( {
	sidebarContainer: {
		display       : "flex",
		flexDirection : "column",
		width         : "25%",
		height        : "100vh",
		position      : "relative",
		borderRight   : "2px solid #e7e7e7",
		padding       : "1rem",

		"& .container::-webkit-scrollbar": {
			display: "none"
		}
	},
	addBtn: {
		padding      : "1rem",
		margin       : "1rem 0",
		border       : "none",
		color        : "green",
		borderRadius : "10px",
		fontSize     : "1.2rem",
		cursor       : "pointer"
	}
} );
