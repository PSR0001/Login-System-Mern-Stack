
import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import Navbar from './Navbar';

export default function Signup() {
    const history = useHistory();
    const [users, setUsers] = useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
    })
    let name, value;
    const handelUserData = (e) => {
        // console.log(e)
        name = e.target.name
        value = e.target.value
        setUsers({ ...users, [name]: value })

    }
    //post  data
    const postUserData = async (e) => {
        e.preventDefault()

        let { name, email, phone, work, password, cpassword } = users;
        const response = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        })

        const data = await response.json()

        if (data.status === 422 || !data) {
            window.alert(data.message)
            history.push("/login")
        }
        else {
            window.alert(data.message)
        }
    }


    return (
        <>
            <Navbar />

            <section className="vh-100 bg-image gradient-custom-4 ">
                <div className="mask d-flex align-items-center h-100 ">
                    <div className="container h-100 ">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card my-5 shadow-container" >
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                                        <form>

                                            <div className="form-outline mb-4">
                                                <input name="name" value={users.name} onChange={handelUserData} type="text" id="name" className="form-control " />
                                                <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input value={users.email} onChange={handelUserData} name="email" type="email" id="email" className="form-control " />
                                                <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input name="phone" value={users.phone} onChange={handelUserData}  type="text" id="number" className="form-control " />
                                                <label className="form-label" htmlFor="form3Example3cg">Your Number</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input name="work" value={users.work} onChange={handelUserData}  type="text" id="work" className="form-control " />
                                                <label  className="form-label" htmlFor="form3Example3cg">Work</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input value={users.password} onChange={handelUserData} name="password" type="password" id="password" className="form-control " />
                                                <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input name="cpassword" value={users.cpassword} onChange={handelUserData}  type="password" id="cpassword123" className="form-control " />
                                                <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-5">
                                                {/* <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" /> */}
                                                <label className="form-check-label" htmlFor="form2Example3g">
                                                    I agree all statements in <NavLink to="/Terms" className="text-body"><u>Terms of service</u></NavLink>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button onClick={postUserData} type="button"
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                            </div>

                                            <p className="text-center text-muted mt-5 mb-0">Have already an account? 
                                               <NavLink to='/Login'  className="fw-bold text-body"><u>Login here</u></NavLink></p>

                                        </form>

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
