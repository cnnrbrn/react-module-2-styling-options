// import Card from "./components/Card";
// import { ThemeProvider } from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";
import ServerList from "./components/ServerList";
// import ToggleButton from "./components/ToggleButton";
// import { BaseButton, PrimaryButton, SecondaryButton } from "./components/ui/buttons";
// import "./sass/index.scss";
import { servers } from "./data/servers";
import TestAccordion from "./components/TestAccordion";
// import { theme } from "./constants/theme";

function App() {
	return (
		<ChakraProvider>
			{/* <div className="card"></div> */}
			{/* <Card /> */}
			{/* <ToggleButton />
			<BaseButton>Base button</BaseButton>
			<PrimaryButton>Primary</PrimaryButton>
			<SecondaryButton>Secondary</SecondaryButton> */}
			<ServerList servers={servers} />
			<TestAccordion />
		</ChakraProvider>
	);
}

export default App;
