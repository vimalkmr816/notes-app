import { TextField } from "@mui/material";
import { Box }       from "@mui/system";
import dayjs         from "dayjs";
import React         from "react";
import useStyles     from "../../styles/MainScreen/textInput";

const TextInput = props => {
	const date                     = dayjs ().format ( "MMM D, YYYY h:mm A" );
	const { setNote, note, label } = props;
	const handleSetNote            = e => {

		const newNote = label === "Title" ? {
			...note,
			title : e.target.value,
			date  : date
		}:{
			...note,
			text : e.target.value,
			date : date
		};

		setNote ( newNote );
	};

	const classes = useStyles ();

	return (
		<div className = { classes.textInputContainer }>

			<Box
				noValidate
				autoComplete = "off"
				component = "form"
				sx = { {
					"& .MuiTextField-root": { m: 1, width: "25ch" }
				} }
			>

				<TextField
					multiline
					id = "standard-multiline-static"
					label = { label }
					onChange = { e => handleSetNote ( e ) }
					rows = { 4 }
					variant = "standard"
				/>
			</Box>
		</div>
	);
};

export default TextInput;
