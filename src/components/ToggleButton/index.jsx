import PropTypes from "prop-types";
import { Button } from "./ToggleButton.styles";

// const firstName = "Blob";
// const greeting = `Hello ${firstName}`;

function ToggleButton({ isActive, children }) {
	return <Button $isActive={isActive}>{children}</Button>;
}

export default ToggleButton;

ToggleButton.propTypes = {
	isActive: PropTypes.bool.isRequired, // isActive should be a boolean and is required.
	children: PropTypes.node.isRequired, // children can be any valid React node and is required.
};
