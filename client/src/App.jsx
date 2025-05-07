import { useState } from 'react'
import { Routes, Route } from 'react-router'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import LoginForm from './components/LoginForm'
import Home from './components/Home';
import RegistrationForm from './components/RegistrationForm';
import UserLayout from './components/UserLayout';
import Profile from './components/Profile';
import { createContext} from "react";
import MyQuotes from './components/MyQuotes';


export const AuthContext = createContext();

function getUserFromSessionStorage() {
	const userJson = sessionStorage.getItem("user");
	const user = JSON.parse(userJson);
	return user;
}

//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  const [user, setUser] = useState(getUserFromSessionStorage());
 
	return (
		<div className="container">
			<AuthContext.Provider value={{ user, setUser }}>
				<Routes>
					{/* /url */}
					<Route index="true" element={<Home />} />
					<Route path="/login" element={<LoginForm />} />
					<Route path="/register" element={<RegistrationForm />} />
					{/* /user/url */}
					<Route path="/user" element={<UserLayout />}>
          <Route path="edit" element={<Profile />}/>
          <Route path="quotes" element={<MyQuotes />}/>

						
						
					</Route>
				</Routes>
			</AuthContext.Provider>
		</div>
	);
  
  
  
}

export default App
