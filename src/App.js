import { createContext, useContext, useState } from "react";
import { Provider }                            from "react-redux";
import uuid                                    from "react-uuid";
import "scrollable-component";
import "./App.css";
import MainScreen                              from "./components/Mainscreen/MainScreen";
import Sidebar                                 from "./components/Sidebar/Sidebar";
import { store }                               from "./redux/store";
import useStyles                               from "./styles/index";

export const AppContext = createContext ();

function App () {
	const [ note, setNote ] = useState ( { text: "", title: "" } );
	const classes           = useStyles ();

	return (
		<Provider store = { store }>
			<h1 style = { { position: "absolute", top: "1rem", right: "40%", margin: "0.2rem" } }>NoteKey</h1>

			<div className = { classes.rootContainer }>
				<Sidebar note = { note }></Sidebar>

				<MainScreen note = { note }
					setNote = { setNote }
				>
				</MainScreen>
			</div>
		</Provider>
	);
}

export default App;
