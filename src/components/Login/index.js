import {Component} from "react";
import Home  from "../Home";
import firebase from "./firebase";

class Login extends Component{
    handleChange=()=>{
        let recaptcha=new firebase.auth.RecaptchaVerifier("recaptcha");
        let number="8125704798";
        firebase.auth().signInWithPhoneNumber(number,recaptcha).then(function(e){
            let code=prompt("enter the otp");
            if(code==null){
                return;
            }
            else{
                <Home/>
            }
        })


    }
   
    render(){
        return(
            <div className="form1">
                <form id="one">
                <label>Enter Phone Number</label>
                    <input type="number" name="mobile" placeholder="Enter Mobile No" required 
                   /><br/>
                    <button type="submit" onclick={this.handleChange}>Submit</button>

                </form>
                <form id="one">
                    <label>Enter Otp</label>
                    <input type="number" name="otp" placeholder="Enter Otp" required/><br/>
                    <button type="submit">Submit</button>

                </form>
            </div>
        )
    }
}
export default Login;