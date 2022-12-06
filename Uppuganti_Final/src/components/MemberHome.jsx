import Title from "./Title";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
import { useState} from "react";
import axios from "axios";

export default function MemberHome() {


    const [accused, setAccused] = useState();
    const [businessType, setBusinessType] = useState();
    const [locationBusiness, setLocationBusiness] = useState('');
    const [locationLand, setLocationLand] = useState('');
    const [landOwned, setLandOwned] = useState('');
    const [relationType, setRelationType] = useState('');
    const [familyGroup, setFamilyGroup] = useState('');
    const [familyMember, setFamilyMember] = useState('');
    const [businessDetails, setBusinessDetails] = useState('');
    const [trailDetails, setTrailDetails] = useState('');
    const [landDetails, setLandDetails] = useState('');
    const [users, setUsers] = useState([]);

    let currentUser;
    if (window.sessionStorage.getItem("userDetails")) {
        currentUser = JSON.parse(window.sessionStorage.getItem("userDetails"));

        // console.log(currentUser);
    }
    if (users.length === 0) {
        getAllUsers();
    }
    async function getAllUsers() {
        const config = {
            method: 'get',
            url: 'http://bat5491.uta.cloud/php/getUsers.php'
        };

        let res = await axios(config);
        setUsers(res.data.filter(user => (user.userId !== currentUser.userId && user.userId !== '1')));
    }

    function submitBusiness(e) {
        if (!businessType) {
            alert("Please select busimess type.")
            e.preventDefault();
        }
        else {
            axios({
                method: 'post',
                url: 'http://bat5491.uta.cloud/php/addBusinessInfo.php',
                headers: {
                    'content-type': 'application/json'
                },
                data: {
                    businessType: businessType, locationBusiness: locationBusiness,
                    details: businessDetails, userId: currentUser.userId
                }
            })
                .then(result => {
                    console.log(result);
                    if (result.data === 'success') {
                        alert('Business details are being verified by the admin.');
                    }
                    else {
                        console.log(result);
                        alert('Submit failed. Please check the details again!');
                    }
                })
                .catch(error => console.log(error));
            e.preventDefault();
        }
    }

    function submitTrail(e) {

        if (!accused || !trailDetails) {
            alert("Please enter all the values.")
        }
        else {
            axios({
                method: 'post',
                url: 'http://bat5491.uta.cloud/php/addTrail.php',
                headers: {
                    'content-type': 'application/json'
                },
                data: { accusorId: currentUser.userId, accusedId: accused, details: trailDetails }
            })
                .then(result => {
                    console.log(result);
                    if (result.data.sent === 1) {
                        alert('Trail details are being verified by the admin.');
                    }
                    else {
                        console.log(result);
                        alert('Submit failed. Please check the details again!');
                    }
                })
                .catch(error => console.log(error));
        }

        e.preventDefault();

    }

    function submitLand(e) {

        if (!locationLand || !relationType || !landOwned || !landDetails) {
            alert("Please enter all the values.")
        }
        else {
            axios({
                method: 'post',
                url: 'http://bat5491.uta.cloud/php/addLandInfo.php',
                headers: {
                    'content-type': 'application/json'
                },
                data: { location: locationLand, landOwned: landOwned, relationWithLand: relationType, details: landDetails, userId: currentUser.userId }
            })
                .then(result => {
                    console.log(result);
                    if (result.data.sent === 1) {
                        alert('Lan details are being verified by the admin.');
                    }
                    else {
                        console.log(result);
                        alert('Submit failed. Please check the details again!');
                    }
                })
                .catch(error => console.log(error));
        }

        e.preventDefault();

    }

    function submitPersonal(e) {
        if (!familyGroup || !familyMember) {
            alert("Please enter following details")
        }
        else {
            axios({
                method: 'post',
                url: 'http://bat5491.uta.cloud/php/addPersonalInfo.php',
                headers: {
                    'content-type': 'application/json'
                },
                data: { Group: familyGroup, memberOfFamily: familyMember }
            })
                .then(result => {
                    // console.log(result);
                    if (result.data.sent === 1) {
                        alert('Thank you for providing with your personal information.');
                    }
                    else {
                        // console.log(result);
                        alert('Submit failed. Please check all the details again!');
                    }
                })
                .catch(error => console.log(error));
        }

        e.preventDefault();

    }

    return (
        <>
            <PageHeader />
            <Title name="Member Home" />
            <div className="memHome">
                <div className="maindiv column">
                    <form action="#" onSubmit={submitTrail}>
                        <fieldset style={{ "margin-bottom": "10px" }}>
                            <legend>Trial Info</legend>
                            <div className="column">
                                <fieldset>
                                    <legend>Accused</legend>
                                    <select
                                        name="accused"
                                        id="accused"
                                        required defaultValue
                                        value={accused}
                                        onChange={e => setAccused(e.target.value)} >
                                        <option value disabled>Select Accused</option>
                                        {users.map(i => <option value={i.userId} key={i.userId}>{i.firstName} {i.lastName}</option>)}
                                    </select>
                                </fieldset>
                                <fieldset>
                                    <legend>Details</legend>
                                    <textarea placeholder="Enter details of the trial." value={trailDetails}
                                        required onChange={e => setTrailDetails(e.target.value.trim())}></textarea>
                                </fieldset>
                            </div>
                        </fieldset>
                        <div className="buttonDiv">
                            <input type="submit" value="Submit" style={{ "width": "100px" }} />
                        </div>
                    </form>
                </div>

                <div className="maindiv column">
                    <form action="#" onSubmit={submitBusiness}>
                        <fieldset style={{ "margin-bottom": "10px" }}>
                            <legend>Business Info</legend>
                            <div className="column">
                                <fieldset>
                                    <legend >Business Type</legend>
                                    <select name="business type" id="business type"
                                        placeholder='Select Business Type' defaultValue value={businessType}
                                        onChange={e => setBusinessType(e.target.value)} required
                                    >
                                        <option value disabled>Select Business Type</option>
                                        <option value="agriculture">Agriculture</option>
                                        <option value="industrial">Industrial</option>
                                        <option value="other">Other</option>
                                    </select>
                                </fieldset>
                                <fieldset>
                                    <legend>Location (Business)</legend>
                                    <input type="text" placeholder="Location of Business"
                                        value={locationBusiness} required
                                        onChange={e => setLocationBusiness(e.target.value)} />
                                </fieldset>

                                <fieldset>
                                    <legend>Details</legend>
                                    <textarea placeholder="Enter details of the business owned."
                                        value={businessDetails}
                                        onChange={e => setBusinessDetails(e.target.value)}></textarea>
                                </fieldset>
                            </div>
                        </fieldset>
                        <div className="buttonDiv">
                            <input type="submit" value="Submit" style={{ "width": "100px" }} />
                        </div>
                    </form>
                </div>
            </div>

            <div className="memHome">
                <div className="maindiv column">
                    <form action="#" onSubmit={submitLand}>
                        <fieldset style={{ "margin-bottom": "10px" }}>
                            <legend>Land Info</legend>
                            <div className="column">
                                <fieldset>
                                    <legend>Location (Land)</legend>
                                    <input type="text" placeholder="Location of Land"
                                        value={locationLand}
                                        onChange={e => setLocationLand(e.target.value)} />
                                </fieldset>
                                <fieldset>
                                    <legend>Land Owned (in m2)</legend>
                                    <input type="number" placeholder="Enter land owned"
                                        value={landOwned}
                                        onChange={e => setLandOwned(e.target.value)} />
                                </fieldset>
                                <fieldset>
                                    <legend >Relation with Land</legend>
                                    <select name="land type" id="land type"
                                        placeholder='Select Land Relation Type'
                                        value={relationType}
                                        defaultValue
                                        onChange={e => setRelationType(e.target.value)}>
                                        <option value disabled>Select Land Relation Type</option>
                                        <option value="agriculture">Trial</option>
                                        <option value="industrial">Inherited</option>
                                        <option value="other">Other</option>
                                    </select>
                                </fieldset>
                                <fieldset>
                                    <legend>Details</legend>
                                    <textarea placeholder="Enter details of the land acquired."
                                        value={landDetails}
                                        onChange={e => setLandDetails(e.target.value)}></textarea>
                                </fieldset>
                            </div>
                        </fieldset>
                        <div className="buttonDiv">
                            <input type="submit" value="Submit" style={{ "width": "100px" }} />
                        </div>
                    </form>
                </div>

                <div className="maindiv column">
                    <form action="#" onSubmit={submitPersonal}>
                        <fieldset style={{ "margin-bottom": "10px" }}>
                            <legend>Family Info</legend>
                            <div className="column">
                                <fieldset>
                                    <legend style={{ "padding": "5px" }}>Family Group</legend>
                                    <input type="text" placeholder="Enter family group"
                                        value={familyGroup}
                                        onChange={e => setFamilyGroup(e.target.value)} />
                                </fieldset>
                                <fieldset>
                                    <legend style={{ "padding": "5px" }}>Add family member</legend>
                                    <input type="text" placeholder="Enter name"
                                        value={familyMember}
                                        onChange={e => setFamilyMember(e.target.value)} />
                                </fieldset>
                            </div>
                        </fieldset>
                        <div className="buttonDiv">
                            <input type="submit" value="Submit" style={{ "width": "100px" }} />
                        </div>
                    </form>
                </div>
            </div>
            <PageFooter />
        </>
    )
}


/* CREATED BY :

1. Lakshmi Radha Yashwanth Uppuganti - 1001964009
2. Bhargava Manikanta Aditya Tummalapenta - 1001965491
3. Sravani Ravipati - 1001949731 */ 