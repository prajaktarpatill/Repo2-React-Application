import { useContext,useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router";
import { userSignIn } from "../services/users";

import { AuthContext } from "../App";


const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext);





    const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswdChange = (e) => setPassword(e.target.value);

    const handleSignInClick =  async (e) => {
		try {
			// validate user login using REST service
			const user = await userSignIn(email, password);
			// store user object + jwt token (in sessionStorage)
			sessionStorage.setItem("user", JSON.stringify(user));
			// update the context
			setUser(user);
			// after successful login, go to user dashboard
			navigate("/user");
		} catch (err) {
			toast.error("Invalid credentials.");
		}
}
return(
    <div className="col border border-2 shadow p-5 m-3 w-50">
			<div className="mb-3 text-center">
				<h2>Login Form</h2>

                </div>
			<div className="mb-3">
				<label className="form-label">Email:</label>
				<input
					className="form-control"
					name="email"
					type="text"
					onChange={handleEmailChange}
				/>
			</div>
			<div className="mb-3">
				<label className="form-label">Password:</label>
				<input
					className="form-control"
					name="password"
					type="password"
					onChange={handlePasswdChange}
				/>
			</div>


          <p>Dont have Account?
          <Link className="mx-3 col " to="/register">
          register here
				</Link>
            </p> 
					

			<div className="row">
				<button
					className="mx-3 col btn btn-primary"
					onClick={handleSignInClick}
				>
					Sign In
				</button>
				
			</div>
		</div>

)


}

export default LoginForm;