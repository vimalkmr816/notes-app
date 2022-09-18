import { createUseStyles } from "react-jss"

export default createUseStyles({
	markdownScreenContainer: {
		width: "50%",
		height: "95%",
		padding: "1rem",
		borderRadius: "10px",
		background: "#e7e7e7",
		alignSelf: "",
	},
	inputSection: {
		marginTop: "1rem",
		height: "100%",
		width: "100%",
		background: "transparent",
		border: "none",
		"&:focus": {
			outline: 0,
		},
	},
})
