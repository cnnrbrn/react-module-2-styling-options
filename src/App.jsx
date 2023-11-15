// import Card from "./components/Card";
import { ThemeProvider } from "styled-components";

import ServerList from "./components/ServerList";
// import ToggleButton from "./components/ToggleButton";
// import { BaseButton, PrimaryButton, SecondaryButton } from "./components/ui/buttons";
// import "./sass/index.scss";
import { servers } from "./data/servers";
import { theme } from "./constants/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			{/* <div className="card"></div> */}
			{/* <Card /> */}
			{/* <ToggleButton />
			<BaseButton>Base button</BaseButton>
			<PrimaryButton>Primary</PrimaryButton>
			<SecondaryButton>Secondary</SecondaryButton> */}
			<ServerList servers={servers} />
		</ThemeProvider>
	);
}

export default App;
