import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
// import Carosole from './Carosole';
import Navbar from './Navbar';
import Cv from './Cv';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineGoogle, AiFillGithub } from 'react-icons/ai';
import { ImLinkedin2 } from 'react-icons/im';

import img from "../img/171.jpg"


const About = () => {
    const history = useHistory();

    const callAboutPage = async () => {
        try {
            const response = await fetch('/about', {
                method: "POST",
                mode: "cors",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include",

            })

            const data = await response.json();
            console.log(data.status)
            // if (data.status === 401 || !data) {
            //     window.alert('Please Log In!')
            //     history.push("/login")
            // }

        }
        catch (err) {
            console.log('i am error' + err)
            history.push("/login")
        }
    }

    // callAboutPage();

    useEffect(() => {
        callAboutPage();
        console.log('hi i am useeffect hook')
    })



    return (
        <div>
            <Navbar />
            {/* <Carosole /> */}
            <div className="" >
                <img src={img} className="w-100" alt="120" />
            </div>

            <div className="text-center container ">
                <div className="card mx-4 mx-md-5 container1245 shadow-" >
                    <div className="card-body py-5 px-md-5 ">
                        <div className="row d-flex justify-content-center ">
                            <div className="col-lg-8">
                                <h2 className="fw-bold mb-5">Hi! I am Partha👋...</h2>


                                <Cv />

                                <div className="text-center">
                                    <p>or Follow me :</p>
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <FaFacebookF />
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <AiOutlineGoogle />
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <ImLinkedin2 />
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <AiFillGithub />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;