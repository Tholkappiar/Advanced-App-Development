import { useNavigate } from "react-router-dom";

/**
 * Pass the endpoint to navigate to the
 * @param {String} endpoint
 */
const Navigate = (endpoint) => {
	const navigate = useNavigate();
	navigate(endpoint);
};
export default Navigate;
