import PropTypes from "prop-types";
import ToggleButton from "../ToggleButton";

function ServerList({ servers }) {
	console.log(servers);

	return (
		<ul>
			{servers.map((server) => (
				<li key={server.id}>
					<ToggleButton isActive={server.isActive}>{server.name}</ToggleButton>
				</li>
			))}
		</ul>
	);
}

export default ServerList;

ServerList.propTypes = {
	servers: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			isActive: PropTypes.bool.isRequired,
			name: PropTypes.string.isRequired,
		})
	).isRequired,
};
