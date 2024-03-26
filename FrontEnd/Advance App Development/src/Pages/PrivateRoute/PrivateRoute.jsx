import { useState } from "react";

// The component is passed as a prop and checked for the login status and then the passed prop
// is rendered.
const PrivateRoute = ({ Component }) => {
	// The authentication logic or , use context or Redux
	const [auth, setAuth] = useState(false);
	// Conditional rendering the component based on the login status
	return auth ? <Component /> : <h1>Not have the Auth !</h1>;
};

export default PrivateRoute;
