import React, { Component } from 'react';

class login extends Component {
	render() {
		return (

			<>
			  <div className="container">
				<div className="mb-3 my-3 row">
					<label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
					<div className="col-sm-10">
						<input type="text" readOnly className="form-control-plaintext" id="staticEmail" placeholder="email@example.com"/>
					</div>
				</div>
				<div className="mb-3 my-3 row">
					<label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
					<div className="col-sm-10">
						<input type="password" className="form-control" id="inputPassword2"/>
					</div>
				</div>
				<button className="btn btn-primary my3">Submit</button>
				</div>
			</>
		);
	}
}

export default login;