import Box          from "@mui/material/Box";
import FormControl  from "@mui/material/FormControl";
import InputLabel   from "@mui/material/InputLabel";
import MenuItem     from "@mui/material/MenuItem";
import Select       from "@mui/material/Select";
import { useState } from "react";

const SortFilter = () => {
	const [ age, setAge ] = useState ( "" );

	const handleChange = event => {
		setAge ( event.target.value );
	};

	return (
		<Box sx = { { minWidth: 120 } }>
			<FormControl fullWidth>
				<InputLabel id = "demo-simple-select-label">Sort</InputLabel>

				<Select
					id = "demo-simple-select"
					label = "Sort"
					labelId = "demo-simple-select-label"
					onChange = { handleChange }
					value = { age }
				>
					<MenuItem value = { 10 }>A-Z</MenuItem>

					<MenuItem value = { 20 }>Z-A</MenuItem>

					<MenuItem value = { 30 }>Date (Increasing)</MenuItem>

					<MenuItem value = { 30 }>Date (Decreasing)</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
};

export default SortFilter;