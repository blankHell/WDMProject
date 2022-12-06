//import { Link } from 'react-router-dom';
import Title from "./Title"
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function ForgotPassword()
{
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    function showInfo() {
        document.getElementById('password-warning').style.display = 'block';
    }

    function hideInfo() {
        document.getElementById('password-warning').style.display = 'none';
    }
    function validateForm(e) {
        let password = document.forms["changepassword"]["password"].value;
        console.log(password);
        let reTypePassword = document.forms["changepassword"]["retypePassword"].value;
        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if (!password.match(passwordRegex)) {
            alert("Password must be between 8-15 characters long, contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character")
            e.preventDefault();
            return false;
        }
        else if (reTypePassword !== password) {
            alert("Passwords do not match. Try again!")
            e.preventDefault();
            return false;
        }
        else {
            axios({
                method: 'post',
                url: 'http://bat5491.uta.cloud/php/forgotPassword.php',
                headers: {
                    'content-type': 'application/json'
                },
                data: { password: password, email:email}
            })
                .then(result => {
                    console.log(result.data);
                    if (result.data.sent === 1) {
                        alert('Password successfully reset. You will be redirected to login page');
                        setTimeout(() => {
                            navigate("/signin")
                        }, 500)
                    }
                    else {

                        alert('Password is not updated. Please try again');
                    }
                })
                .catch(error => console.log(error));
            e.preventDefault();
        }
    }



        function checkPasswords() {
            let password = document.forms["changepassword"]["password"].value;
            let reTypePassword = document.forms["changepassword"]["retypePassword"].value;
            console.log(password);
            if (reTypePassword !== password) {
                document.getElementById('retype-password-warning').style.display = 'block';
                document.getElementById('retype-password-warning').innerHTML = 'Passwords do not match';
                document.getElementById('retype-password-warning').style.color = 'red';
            }
            else {
                document.getElementById('retype-password-warning').innerHTML = 'Passwords matched. Please proceed';
                document.getElementById('retype-password-warning').style.color = 'green';
                setTimeout(function () { document.getElementById('retype-password-warning').style.display = 'none'; }, 1000)
            }
        }
    return(
        <>
        <PageHeader/>
        <Title name="FORGOT PASSWORD" />
            <div className="maindiv">
                <form name='changepassword' onSubmit={validateForm}>
                    <div className="column">
                    <fieldset >
                            <legend>Email</legend>
                            <input placeholder="Enter your email id" type="email"
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)} />
                        </fieldset>
                        <fieldset>
                            <legend>Password</legend>
                            <input placeholder="Your Password" type="password" required
                                onFocus={showInfo} onBlur={hideInfo} name="password"
                                value={password} onChange={e => setPassword(e.target.value)} />
                        </fieldset>
                        <fieldset >
                            <legend>Confirm Password</legend>
                            <input placeholder="Re-enter password" type="password" required
                                name="retypePassword" onKeyUp={checkPasswords} />
                        </fieldset>
                        <div className="pad-top warning-text" id="retype-password-warning" style={{ display: "none" }}>
                            Passwords do not match
                        </div>
                        </div>


                    <div className='column'>
                    <div><input type="submit" value="Change Password" style={{padding:"5px"}}/></div>
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