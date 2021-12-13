
import React, { useState } from 'react'
import { useHistory} from 'react-router-dom'

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
    const postUserData = async (e)=>{
        e.preventDefault()

        let { name, email, phone, work, password, cpassword } = users;
        const response = await fetch("/register",{
            method: "POST",
            headers:{
            "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        })
        const data = await response.json()

        if (data.status === 422 || !data) {
            window.alert('Invail Registration')
        }
        else{
            window.alert("Registration Successfill")
            history.push("/login")
        }
    }


    return (
        <>
            <div className="container">
                <div className="mb-3 my-3">
                    <label htmlFor="Name" className="form-label">Name</label>
                    <input type="text" name="name" className="form-control" id="userName" value={users.name} onChange={handelUserData} placeholder="Enter Your Name Here" />
                </div>
                <div className="mb-3 my-3">
                    <label htmlFor="Email" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="userEmail" value={users.email} onChange={handelUserData} placeholder="Enter Your Email " />
                </div>
                <div className="mb-3 my-3">
                    <label htmlFor="Phone" className="form-label">Phone</label>
                    <input type="text" name="phone" className="form-control" id="userPhone" value={users.phone} onChange={handelUserData} placeholder="Enter Your Phone Number " />
                </div>
                <div className="mb-3 my-3">
                    <label htmlFor="Work" className="form-label">Work</label>
                    <input type="text" name="work" className="form-control" id="userWork" value={users.work} onChange={handelUserData} placeholder="Enter Your Work Hare" />
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" name="password" className="form-control" id="inputPassword1" value={users.password} onChange={handelUserData} />
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Confirm Password</label>
                        <div className="col-sm-10">
                            <input type="password" name="cpassword" className="form-control" id="inputPassword" value={users.cpassword} onChange={handelUserData}/>
                        </div>
                        <button onClick={postUserData}  className="btn btn-primary my-3">Submit</button>
                 </div>
               </div>
               </div>
                </>
 )
}
