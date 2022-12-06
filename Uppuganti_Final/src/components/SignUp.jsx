/* CREATED BY :

1. Lakshmi Radha Yashwanth Uppuganti - 1001964009
2. Bhargava Manikanta Aditya Tummalapenta - 1001965491
3. Sravani Ravipati - 1001949731 */

import { Link, useNavigate } from 'react-router-dom';
import Title from './Title';
import { useState, useEffect } from 'react';
import axios from "axios";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

export default function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [selectedAncestor, setSelectedAncestor] = useState('');
    const [ancestors, setAncestors] = useState([]);
    const [gender, setGender] = useState('');
    const [relation, setRelation] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        getAncestors();
    }, [])

    async function getAncestors() {
        const config = {
            method: 'get',
            url: 'http://bat5491.uta.cloud/php/getAncestors.php'
        }

        let res = await axios(config)
        console.log(res.data);
        setAncestors(res.data);
        //console.log(ancestors);
    }
    function showInfo() {
        document.getElementById('password-warning').style.display = 'block';
    }

    function hideInfo() {
        document.getElementById('password-warning').style.display = 'none';
    }
    function validateForm(e) {
        let password = document.forms["signup"]["password"].value;
        let phone = document.forms["signup"]["phoneNumber"].value;
        let reTypePassword = document.forms["signup"]["retypePassword"].value;
        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        let phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
        if (!phone.match(phoneRegex)) {
            alert("Please check the phone number. Phone number should be in the format xxx-xxx-xxxx");
            e.preventDefault();
            return false;
        }
        else if (!password.match(passwordRegex)) {
            alert("Password must be between 8-15 characters long, contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character")
            e.preventDefault();
            return false;
        }
        else if (reTypePassword !== password) {
            alert("Passwords do not match. Try again!")
            e.preventDefault();
            return false;
        }
        else if(!selectedAncestor){
            alert("Please select an ancestor")
            e.preventDefault();
            return false;
        }
        else if(!gender){
            alert("Please select gender")
            e.preventDefault();
            return false;
        }
        else if(!relation){
            alert("Please select relation ancestor")
            e.preventDefault();
            return false;
        }
        
        else {
            //console.log("axios");
            axios({
                method: 'post',
                url: 'http://bat5491.uta.cloud/php/signup.php',
                headers: {
                    'content-type': 'application/json'
                },
                data: { firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, email: email, password: password, gender:gender, selectedAncestor: selectedAncestor, relation: relation }
            })
                .then(result => {
                    console.log(result.data);
                    if (result.data.sent === 1) {
                        alert('Signup success. You will be redirected to login page');
                        setTimeout(() => {
                            navigate("/signin")
                        }, 500)
                    }
                    else {

                        alert('Email already exists. please try another one or login');
                    }
                })
                .catch(error => console.log(error));
            e.preventDefault();
        }
    }

    function checkPasswords() {
        let password = document.forms["signup"]["password"].value;
        let reTypePassword = document.forms["signup"]["retypePassword"].value;
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


    return <>
    <PageHeader/>
        <div className="maindiv">
            <form name="signup" action="#" onSubmit={validateForm}>
                <Title name="Sign Up" />
                <div className="row">
                    <div className="column">
                        <fieldset>
                            <legend>First Name</legend>
                            <input type="text" placeholder="Enter your first name" required
                                autoComplete="nope"
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)} />
                        </fieldset>
                        <fieldset>
                            <legend>Last Name</legend>
                            <input type="text" placeholder="Enter your last name" required
                                autoComplete="nope"
                                value={lastName}
                                onChange={e => setLastName(e.target.value)} />
                        </fieldset>
                        <fieldset >
                            <legend>Email</legend>
                            <input placeholder="Enter your email id" type="email"
                                required
                                autoComplete="nope" value={email}
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
                    <div className="column">
                        <fieldset >
                            <legend>Contact</legend>
                            <input type='tel' placeholder="xxx-xxx-xxxx" pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' name='phoneNumber'
                                value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                        </fieldset>
                        <fieldset >
                            <legend htmlFor="gender">Gender</legend>
                            <div className="scrollable">
                                <select name="gender" id="gender" placeholder='Select Gender' required defaultValue
                                    onChange={e => setGender(e.target.value)}>
                                    <option value disabled>Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </fieldset>
                        <fieldset >
                            <legend htmlFor="ancestor">Ancestor</legend>
                            <div className="scrollable">
                                <select 
                                    name="ancestor" 
                                    id="ancestor" 
                                    required  defaultValue
                                    onChange={e => setSelectedAncestor(e.target.value)}>
                                    <option value disabled>Select Ancestor</option>
                                    {ancestors.map(i=><option value={i.ancestorId} key={i.ancestorId}>{i.ancestorName}</option>)}
                                </select>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend htmlFor="relation">Relation</legend>
                            <select name="relation" id="relation" defaultValue onChange={e => setRelation(e.target.value)} required>
                                <option value disabled>Select Relation</option>
                                <option value="parent">Parent</option>
                                <option value="sibling">Sibling</option>
                                <option value="cousin">Cousin</option>
                                <option value="aunt">Aunt</option>
                                <option value="uncle">Uncle</option>
                            </select>
                        </fieldset>
                    </div>
                </div>
                <div className="pad-top warning-text" id="password-warning"
                    style={{ display: "none" }}>
                    Password must be between 8-15 characters long, contain at
                    least one lowercase letter, one uppercase letter, one numeric
                    digit, and one special character
                </div>
                <div style={{ textAlign: "center" }}>
                    <input type="submit" style={{ "width": "100px" }} value="Sign up" />
                    <div><h6>Already have an account? <Link to='/signin' style={{ 'color': 'black' }}> Login </Link></h6></div>
                </div>
            </form>
        </div>
        <PageFooter/>
    </>
}

/* CREATED BY :

1. Lakshmi Radha Yashwanth Uppuganti - 1001964009
2. Bhargava Manikanta Aditya Tummalapenta - 1001965491
3. Sravani Ravipati - 1001949731 */ 