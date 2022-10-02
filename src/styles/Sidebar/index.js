import { createUseStyles } from "react-jss";

export default createUseStyles ( {
	sidebarContainer: {
		display                           : "flex",
		flexDirection                     : "column",
		width                             : "15%",
		height                            : "100vh",
		position                          : "relative",
		padding                           : "0",
		"& .container::-webkit-scrollbar" : {
			display: "none"
		}
	},
	addBtn: {
		// width: "80%",
		padding      : "1rem",
		margin       : "3.4rem 0rem 1rem 0rem",
		border       : "none",
		color        : "green",
		borderRadius : "10px",
		fontSize     : "1.2rem",
		cursor       : "pointer"
	}
} );
