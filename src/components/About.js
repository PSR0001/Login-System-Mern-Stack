import React,{useEffect} from 'react'
import {useHistory} from 'react-router-dom'

const About = () => {
    const history = useHistory();

    const callAboutPage = async ()=>{
        try{
            const response = await fetch('/about', {
                method: "POST",
                mode:"cors",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials:"include",
                
            })
           
            const data = await response.json();
            console.log(data.status)
            if (data.status === 401 || !data) {
                window.alert('Please Log In!')
                history.push("/login")
            }

        }
        catch(err){
            console.log('i am error'+err)
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
            <p>Welcome</p>
            <div>Welcome to Kgec About page</div>
        </div>
    )
}

export default About;