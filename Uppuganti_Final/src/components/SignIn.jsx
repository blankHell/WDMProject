import Title from "./Title";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    function validateForm(e) {
        axios({
            method: 'post',
            url: "http://bat5491.uta.cloud/php/login.php",
            headers: {
                'content-type': 'application/json'
            },
            data: { email: email, password: password }
        })
            .then(result => {

                if (result.data === 'wrong password') {
                    alert("Your account is inactive or your login details ae incorrect. Please try again or contact an admin");
                }
                else {
                    window.sessionStorage.setItem("userDetails", JSON.stringify(result.data[0]));
                    if(email === 'admin@dsf.com'){
                        navigate("/adminhome")
                    }
                    else {
                        navigate("/memberhome")
                    }
                }
            })
            .catch(error => { alert("Please check username and password"); }

            );
        e.preventDefault();
    }
    return (
        <>
        <PageHeader/>
            <Title name="SIGN IN" />
            <div className="maindiv">
                <form action="#" onSubmit={validateForm}>
                    <div className="column">
                        <fieldset>
                            <legend >Email</legend>
                            <input type="email" placeholder="Enter Email" required 
                            onChange={e => setEmail(e.target.value.trim())} value={email} label="Email" />
                        </fieldset>
                        <fieldset>
                            <legend>Password</legend>
                            <input type="password" placeholder="Enter Password" value={ password }
                                required onChange={e => setPassword(e.target.value.trim())} />
                        </fieldset>
                        <a href="/forgotpassword" style={{ "padding": "5px" }}>Forgot Password</a>
                    </div>
                    <div className="column">
                        <button type="submit" style={{ "width": "100px" }}>Login</button>
                    </div>
                </form>
            </div>
            <PageFooter/>
        </>
    )
}

/* CREATED BY :

1. Lakshmi Radha Yashwanth Uppuganti - 1001964009
2. Bhargava Manikanta Aditya Tummalapenta - 1001965491
3. Sravani Ravipati - 1001949731 */ 