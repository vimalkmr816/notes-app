import { useState } from "react";
import { Provider } from "react-redux";
import MainScreen   from "./components/Mainscreen/MainScreen";
import Sidebar      from "./components/Sidebar/Sidebar";
import { store }    from "./redux/store";
import useStyles    from "./styles/index";

function App () {
	const [ note, setNote ] = useState ( { text: "", title: "" } );
	const classes           = useStyles ();

	return (
		<Provider store = { store }>
			<div className = { classes.rootContainer }>
				<Sidebar note = { note }></Sidebar>

				<MainScreen note = { note }
					setNote = { setNote }
				/>
			</div>
		</Provider>
	);
}

export default App;
