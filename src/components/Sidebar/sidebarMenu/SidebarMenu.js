import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button       from "@mui/material/Button";
import Menu         from "@mui/material/Menu";
import MenuItem     from "@mui/material/MenuItem";
import { useState } from "react";

const SidebarMenu = () => {
	const [ anchorEl, setAnchorEl ] = useState ( null );
	const open                      = Boolean ( anchorEl );
	const handleClick               = event => {
		setAnchorEl ( event.currentTarget );
	};
	const handleClose               = () => {
		setAnchorEl ( null );
	};

	return (
		<div>
			<Button
				aria-controls = { open ? "basic-menu" : undefined }
				aria-expanded = { open ? "true" : undefined }
				aria-haspopup = "true"
				id = "basic-button"
				onClick = { handleClick }
			>
				<MoreVertIcon />
			</Button>

			<Menu
				anchorEl = { anchorEl }
				id = "basic-menu"
				MenuListProps = { {
					"aria-labelledby": "basic-button"
				} }
				onClose = { handleClose }
				open = { open }
			>
				<MenuItem onClick = { handleClose }>Profile</MenuItem>

				<MenuItem onClick = { handleClose }>My account</MenuItem>

				<MenuItem onClick = { handleClose }>Logout</MenuItem>
			</Menu>
		</div>
	);
};

export default SidebarMenu;