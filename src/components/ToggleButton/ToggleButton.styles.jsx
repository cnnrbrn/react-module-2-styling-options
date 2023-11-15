import styled from "styled-components";

export const Button = styled.button`
	border: 0;
	background: none;
	padding: 1rem;
	font-size: 18px;
	min-width: 200px;
	color: ${(props) => (props.$isActive ? props.theme.colours.fontOn : props.theme.colours.fontOff)};
	background-color: ${(props) => (props.$isActive ? props.theme.colours.on : props.theme.colours.off)};
`;
