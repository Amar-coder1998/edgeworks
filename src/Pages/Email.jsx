import React from "react";
import './email.Modules.css';

const Email=()=>{
    return(
        <div className="mess">
        <div className="mail1">
<img src="./Logos/Email/Group@2x.png" alt="" className="img"/>
<div style={{paddingTop:"80px"}}>
    <form>
<p>Your Name</p>
<input
    type="text"
    name="name"
    placeholder="Enter your name"
    className="enter"
/>
<p>Your Email</p>
<input
    type="email"
    name="email"
    placeholder="Enter your mail id"
    className="enter"
/>
<p>Your Message</p>
<textarea
    type="textarea"
    name="text"
    placeholder="Enter your message"
    className="textarea"
/><br/><br/>
<button className="submit">submit</button>
</form>
</div>
        </div>
        </div>
);
};
export default Email;