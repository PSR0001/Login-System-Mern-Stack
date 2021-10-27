import React, { Component } from 'react';

class login extends Component {
    render() {
        return (
            <>
                <div className="login-wrap">
	<div className="login-html">
		<input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label htmlFor="tab-1" className="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
		<div className="login-form">
			<div className="sign-in-htm">
				<div class="group">
					<label for="user" className="label">Email Id</label>
					<input id="user-1" type="text" className="input" />
				</div>
				<div class="group">
					<label for="pass" className="label">Password</label>
					<input id="pass-1" type="password" className="input" data-type="password" />
				</div>
				<div className="group">
					<input id="check" type="checkbox" className="check" />
					<label for="check"><span className="icon"></span> Keep me Signed in</label>
				</div>
				<div className="group">
					<input type="submit" className="button" value="Sign In" />
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
				</div>
			</div>
			<div className="sign-up-htm">
				<div className="group">
					<label for="user" className="label">Username</label>
					<input id="user-2" type="text" className="input" />
				</div>
				<div className="group">
					<label for="pass" className="label">Password</label>
					<input id="pass-2" type="password" className="input" data-type="password" />
				</div>
				<div class="group">
					<label for="pass" class="label">Repeat Password</label>
					<input id="pass-3" type="password" class="input" data-type="password" />
				</div>
				<div class="group">
					<label for="pass" class="label">Email Address</label>
					<input id="pass-4" type="text" class="input" />
				</div>
				<div className="group">
					<input type="submit" class="button" value="Sign Up"/>
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<label for="tab-1" />Already Member?
				</div>
			</div>
		</div>
	</div>
</div>
            </>
        );
    }
}

export default login;