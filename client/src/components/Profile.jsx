import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { userSave } from "../services/users";



const Profile = () => {
	const [info, setInfo] = useState({
        id:"",
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		phoneno: "",
        address: "",
        
	});

    const navigate = useNavigate();
	const handleInputFieldChange = (e) =>
		setInfo({ ...info, [e.target.name]: e.target.value });

	const handleSaveClick = async (e) => {
		try {
			// register user using REST api
			const user = await userSave(
                info.id,
				info.firstName,
				info.lastName,
				info.email,
				info.password,
				info.phoneno,
                info.address
			);
			toast.success("User saved with id: " + user.id);
			// then go to login page
			
		} catch (err) {
			toast.error(err.message);
		}
	};
	return (
		<div className="col border border-2 shadow p-5 m-3 w-50">
			<div className="mb-3 text-center">
				<h2>My Profile</h2>

               
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
					name="password"
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
					onClick={handleSaveClick}
				>
					Save
				</button>
                
					
				
			</div>
		</div>
	);
};

export default Profile;
