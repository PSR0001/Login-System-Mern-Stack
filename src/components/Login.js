import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from './Navbar';

export default function Login() {
	const history = useHistory();
	const [userLogIn, setUserLogIn] = useState({
		email: "", password: ""
	})
	let userEmail, userPassword;
	const getLogInInfo = (event) => {
		userEmail = event.target.name
		userPassword = event.target.value
		setUserLogIn({ ...userLogIn, [userEmail]: userPassword })
	}
	const userClickBtn = async (e) => {
		e.preventDefault()

		const { email, password } = userLogIn;
		const response = await fetch('/login', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email, password
			})
		})
		const data = await response.json()
		if (data.status === 400 || !data) {
			window.alert(data.message)
		}
		else {
			window.alert(data.message)
			history.push('/')
		}
	}


	return (
		<>
		<Navbar />
			<div className="container">
				<form method="POST" >
					<div className="mb-3 my-3 row">
						<label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
						<div className="col-sm-10">
							<input type="text" className="form-control-plaintext" name='email' value={userLogIn.email} onChange={getLogInInfo} id="staticEmail" placeholder="email@example.com" />
						</div>
					</div>
					<div className="mb-3 my-3 row">
						<label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
						<div className="col-sm-10">
							<input type="password" name='password' value={userLogIn.password} onChange={getLogInInfo} className="form-control" id="inputPassword2" />
						</div>
					</div>
					</form>

					<button onClick={userClickBtn} className="btn btn-primary my3" >Submit</button>
			</div>
		</>
	)
}
