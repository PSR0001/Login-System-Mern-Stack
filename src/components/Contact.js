import React from 'react'
import Navbar from './Navbar'
import img from '../img/partha.jpg'
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineGoogle, AiFillGithub } from 'react-icons/ai';
import { ImLinkedin2 } from 'react-icons/im';

const Contact = () => {
  return (
    <div>
      <Navbar />



      <section className="text-center text-lg-start container">

        <div className="container py-4 ">
          <div className="row g-0 align-items-center visibility2">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card cascading-right op shadow-container" >
                <div className="card-body p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5">Contact Me</h2>
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example1" className="form-control" />
                          <label className="form-label" htmlFor="form3Example1">First name</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example2" className="form-control" />
                          <label className="form-label" htmlFor="form3Example2">Last name</label>
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="email" id="form3Example3" className="form-control" />
                      <label className="form-label" htmlFor="form3Example3">Email address</label>
                    </div>

                    <div className="form-outline mb-4">
                      <textarea type="text" id="form3Example4" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4">Message</label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mb-4">
                      Message
                    </button>

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
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 visibility1 container123">
              <img src={img} className="w-100 image"
                alt="img" />
              <div className="overlay">
                <div className="text">
               <p> Hello, I am Partha Singha Roy. I have rich interest in Web Development, Electronics, IoT. Born in Nadia, West Bengal. It has been a long journey till here. I hope this website will interest you in my life.</p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>





    </div>
  )
}

export default Contact