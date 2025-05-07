import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

const RegistrationForm = () => {
	const [inNo, setInfo] = useState({
		firstName: "",
		lastName: "",
		email: "",
		passwd: "",
		phoneno: "",
        addr: "",

	});

	const navigate = useNavigate();
	const handleInputFieldChange = (e) =>
		setInfo({ ...info, [e.target.name]: e.target.value });

	const handleSignUpClick = (e) => {
		// register user using REST api

		// then go to login page
		navigate("/login");
	};

	return (
		<div className="col border border-2 shadow p-5 m-3">
			<div className="mb-3 text-center">
				<h2>Registration Form</h2>
			</div>
			<div className="mb-3">
				<label className="form-label">First Name:</label>
				<input
					className="form-control"
					name="firstName"
					type="text"
					onChange={handleInputFieldChange}
				/>
			</div>
			<div className="mb-3">
				<label className="form-label">Last Name:</label>
				<input
					className="form-control"
					name="lastName"
					type="text"
					onChange={handleInputFieldChange}
				/>
			</div>
			<div className="mb-3">
				<label className="form-label">email:</label>
				<input
					className="form-control"
					name="email"
					type="text"
					onChange={handleInputFieldChange}
				/>
			</div>
			<div className="mb-3">
				<label className="form-label">Password:</label>
				<input
					className="form-control"
					name="passwd"
					type="password"
					onChange={handleInputFieldChange}
				/>
			</div>
			<div className="mb-3">
				<label className="form-label">Phone No:</label>
				<input
					className="form-control"
					name="phoneno"
					type="text"
					onChange={handleInputFieldChange}
				/>
			</div>

            <div className="mb-3">
				<label className="form-label">Address:</label>
				<input
					className="form-control"
					name="address"
					type="text"
					onChange={handleInputFieldChange}
				/>
			</div>

			<div className="row">
				<button
					className="mx-3 col btn btn-primary"
					onClick={handleSignUpClick}
				>
					Sign Up
				</button>
				<Link className="mx-3 col btn btn-secondary" to="/login">
					Sign In
				</Link>
			</div>
		</div>
	);
};

export default RegistrationForm;
