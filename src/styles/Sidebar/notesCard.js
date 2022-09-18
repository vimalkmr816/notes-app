import { createUseStyles } from "react-jss"

export default createUseStyles({
	notesCardWrapper: {
		borderRadius: "10px",
		background: "#e7e7e7",
		padding: "1rem 1.2rem",
	},
	notesCardTitle: {
		wordBreak: "break-all",
		margin: "0",
		display: "flex",
		justifyContent: "space-between",
	},
	deleteBtn: {
		border: "none",
		borderRadius: "4px",
		background: "#fff",
		padding: "0.2rem 0.4rem",
		alignSelf: "flex-start",
		marginLeft: "0.8rem",
	},
})
