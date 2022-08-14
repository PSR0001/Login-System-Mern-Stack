import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import Navbar from './Navbar';
import logo from '../img/Mern-stack.png'

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
			<section className="h-100 gradient-form" >
				<div className="container py-5 h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col-xl-10">
							<div className="card rounded-3 border-radius text-black shadow-container">
								<div className="row g-0">
									<div className="col-lg-6">
										<div className="card-body p-md-5 mx-md-4">

											<div className="text-center">
												<img src={logo}
													alt="logo" height={80} width={200} />
												<h4 className="mt-1 mb-5 pb-1">I am a MERN Developer</h4>
											</div>

											<form>
												<p>Please login to your account</p>

												<div className="form-outline mb-4">
													<input type="email" id="form2Example11" className="form-control"
														placeholder=" Email address" name='email' value={userLogIn.email} onChange={getLogInInfo} />
													<label className="form-label" htmlFor="form2Example11">Username</label>
												</div>

												<div className="form-outline mb-4">
													<input name='password' value={userLogIn.password} onChange={getLogInInfo} type="password" id="form2Example22" className="form-control" />
													<label className="form-label" htmlFor="form2Example22">Password</label>
												</div>

												<div className="text-center pt-1 mb-5 pb-1">
													<button onClick={userClickBtn} className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Log
														in</button>
													<a className="text-muted" href="#!">Forgot password?</a>
												</div>

												<div className="d-flex align-items-center justify-content-center pb-4">
													<p className="mb-0 ">Don't have an account?</p>
													<NavLink to='/Signup'><button type="button" className="btn btn-outline-danger">Create new</button></NavLink>
												</div>

											</form>

										</div>
									</div>
									<div className="col-lg-6 d-flex align-items-center gradient-custom-2">
										<div className="text-white px-3 py-4 p-md-5 mx-md-4">
											<h4 className="mb-4">We are more than just a company</h4>
											<p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
												tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
												exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
