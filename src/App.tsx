import { useState } from "react";
import reactLogo from "./assets/react.svg";

import { NavbarComponent } from "./components/navbar";
import { FormComponent } from "./components/form";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<NavbarComponent />
			<FormComponent />
		</>
	);
}

export default App;
