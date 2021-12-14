import React from 'react'
import {useHistory} from 'react-router-dom'

const About = () => {
    const history = useHistory();

    const callAboutPage = async ()=>{
        try{
            const response = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials:"include"
            })
            const data = await response.json();
            console.log('login page data' + data)
           

            if (!data.status ===200) {
                const error = new Error(response.error);
                throw error;
            }

        }
        catch(err){
            console.log('i am error'+err)
            history.push("/login")
        }
    }

    // callAboutPage();

 
        callAboutPage();
  

    return (
        <div>
            <p>Welcome</p>
            <div>Welcome to Kgec About page</div>
        </div>
    )
}

export default About;