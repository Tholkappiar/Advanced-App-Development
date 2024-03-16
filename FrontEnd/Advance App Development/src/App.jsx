import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Pages/LandingPage/Header";
import HomePage from "./Pages/LandingPage/HomePage";
import LoginForm from "./Forms/Login";
import Signup from "./Forms/Signup";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/login" element={<LoginForm />}></Route>
					<Route path="/sign" element={<Signup />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
