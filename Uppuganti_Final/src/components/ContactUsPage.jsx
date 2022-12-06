import Title from "./Title"
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
import {useState} from 'react';
import axios from "axios";


export default function ContactUsPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');

    function validateForm(e){
        if(!email){
            alert("Please enter your email");
            return false;
        }
        else if(!name){
            alert("First Name can't be blank");
            e.preventDefault();
            return false;
        }
        
        else if(!description){
            alert("Description can't be blank");
            e.preventDefault();
            return false;
        }
        else if (!subject) {
            alert("Please enter subject ");
            e.preventDefault();
            return false;
        }
       
      
        else {
            axios({
                method: 'post',
                url: 'http://bat5491.uta.cloud/php/contact.php',
                headers: {
                    'content-type': 'application/json'
                },
                data: { name: name, email: email, subject:subject, description:description }
            })
                .then(result => {
                    console.log(result);
                    if (result.data.sent === 1) {
                        alert('We have revceived your message. We will contact you');
                    }
                    else {

                        alert('Something went wrong. Try submitting again');
                    }
                })
                .catch(error => console.log(error));
            e.preventDefault();
        }
        e.preventDefault();
    }
   
    return (
        <>
        <PageHeader/>
            <Title name="CONTACT US" />
            <div className="maindiv">
                <form action="#" onSubmit ={validateForm}>
                    <div className="column">
                        <fieldset>
                            <legend>Email</legend>
                            <input type="email" placeholder="Enter Email" value={email} onChange={e=> setEmail(e.target.value.trim())} required />
                        </fieldset>
                        <fieldset>
                            <legend >Name</legend>
                            <input type="text" placeholder="Enter Name" value={name} onChange={e=> setName(e.target.value.trim())} required />
                        </fieldset>
                        <fieldset>
                            <legend>Subject</legend>
                            <input type="text" placeholder="What do you want to reach us about" style={{"width":"fit-content"}}
                            required value={subject} onChange={e=> setSubject(e.target.value.trim())}/>
                        </fieldset>
                        <fieldset>
                            <legend for="description">Description</legend>
                            <textarea id="description" placeholder="Enter the full details of your query"  maxLength="1024" value={description} onChange={e=> setDescription(e.target.value.trim())} required></textarea>
                        </fieldset>
                    </div>
                    <div className="column">
                        <button type="submit" style={{ "width": "100px" }}>Submit</button>
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