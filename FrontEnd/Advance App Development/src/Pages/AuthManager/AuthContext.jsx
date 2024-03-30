import { createContext } from "react";

const AuthContext = createContext({
	isLoggedIn: localStorage.getItem("isLoggedIn"),
	JWT: localStorage.getItem("JWT"),
	// user: localStorage.getItem("user"),
});

export default AuthContext;
