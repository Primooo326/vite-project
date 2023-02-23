import { useState } from "react";
import reactLogo from "./assets/react.svg";

import { NavbarComponent } from "./components/navbar";
import { FormComponent } from "./components/form";
import { Products } from "./components/procuts";
import { Metaverso } from "./components/metaverso";
import { Slider } from "./components/silder";
import { ContactUs } from "./components/contactUs";
import { Cymetria } from "./components/cymetria";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<NavbarComponent />
			<FormComponent />
			<Products />
			<Metaverso />
			<Slider />
			<ContactUs />
			<Cymetria />
		</>
	);
}

export default App;
