import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <>
         
                <section className="cont">
                     <div className="content">
                         <h1> Learn Web Design, <br></br>
                             Coding & Much More
                         </h1>  
                         <p> Get your free trial started today! </p>
                      </div>
                 <div className="form">
                  <p id="title"> Get Started Today! </p>
                        <form>
                    <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Email" /> <br></br>
                    <input type="email" placeholder="Message" /> <br></br>
                      <input type="submit" />
                    </form>
                    </div>
                   </section>
                  
                   </>
        );
    }
}

export default Home;