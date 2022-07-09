
import { Routes, Route } from "react-router-dom";
import SignIn from './pages/signIn';
import Home from './pages/home';
import Navbar from './Components/Navbar';

function App() {
	return (
	  <div className="App">
		<Routes>
			<Route path="/" element={<Home />} />
		  	<Route path="/signin" element={<SignIn />} />
		</Routes>
	  </div>
	);
  }

export default App;
