// import Header from "./Forms/Header";
// import LoginForm from "./Forms/Login";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Signup from "./Forms/Signup";
import "./output.css";
import Cards from "./Forms/Cards";

function App() {
	return (
		<>
			{/* <BrowserRouter>
				<Header />
				<Routes>
					<Route path="/login" element={<LoginForm />}></Route>
					<Route path="/sign" element={<Signup />}></Route>
				</Routes>
			</BrowserRouter> */}
			<Cards />
		</>
	);
}

export default App;
