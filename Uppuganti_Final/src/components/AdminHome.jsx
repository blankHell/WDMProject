import Title from "./Title";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function AdminHome() {
    useEffect(() => {
        getLandAndBusinessDetails();
        getAncestors();
        
    }, [])
    const [landInfoRequestList, setLandInfoRequestList] = useState([]);
    const [businessInforequestList, setBusinessInfoRequestList] = useState([]);
    const[ancestors, setAncestors] = useState([]);

    

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

    async function getLandAndBusinessDetails() {
        const config = {
            method: 'get',
            url: 'http://bat5491.uta.cloud/php/getLandAndBusinessInfo.php'
        }

        let res = await axios(config)
        setLandInfoRequestList(res.data.landInfo);
        setBusinessInfoRequestList(res.data.businessInfo);
    }
    function approveLandRequest(userPropertyId) {
        axios({
            method: 'post',
            url: "http://bat5491.uta.cloud/php/approveLandInfo.php",
            headers: {
                'content-type': 'application/json'
            },
            data: { userPropertyId: userPropertyId, isApprove: true }
        })
            .then(result => {

                getLandAndBusinessDetails();
                alert("Land request was approved successfully")
            })
            .catch(error => console.log(error));
    }

    function rejectLandRequest(userPropertyId) {
        axios({
            method: 'post',
            url: "http://bat5491.uta.cloud/php/approveLandInfo.php",
            headers: {
                'content-type': 'application/json'
            },
            data: { userPropertyId: userPropertyId, isApprove: false }
        })
            .then(result => {

                getLandAndBusinessDetails();
                alert("Land request was rejected successfully")
            })
            .catch(error => console.log(error));
    }
    function approveBusinessRequest(businessId) {
        axios({
            method: 'post',
            url: "http://bat5491.uta.cloud/php/approveBusinessInfo.php",
            headers: {
                'content-type': 'application/json'
            },
            data: { businessId: businessId, isApprove: true }
        })
            .then(result => {

                getLandAndBusinessDetails();
                alert("Business request was approved successfully")
            })
            .catch(error => console.log(error));
    }

    function rejectBusinessRequest(businessId) {
        axios({
            method: 'post',
            url: "http://bat5491.uta.cloud/php/approveBusinessInfo.php",
            headers: {
                'content-type': 'application/json'
            },
            data: { businessId: businessId, isApprove: false }
        })
            .then(result => {

                getLandAndBusinessDetails();
                alert("Business request was rejected successfully")
            })
            .catch(error => console.log(error));
    }
    return (
        <>
            <PageHeader />
            <Title name="Admin Home" />
            <div className="main-div">
                <div className="mma-content">
                    <div>
                        <div style={{ textAlign: "left" }}>Land Info Requests</div>
                        <div className="table-div">
                            <table className="styled-table" id="manager-requests-table">
                                <thead>
                                    <tr>
                                        <td>User Id</td>
                                        <td>Location (Land)</td>
                                        <td>Land Owned</td>
                                        <td>Relation Type</td>
                                        <td>Actions</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {landInfoRequestList.length > 0 ? landInfoRequestList.map(i =>
                                        <tr>
                                            <td>{i.userId}</td>
                                            <td>{i.location}</td>
                                            <td>{i.area}</td>
                                            <td>{i.relationWithLand}</td>
                                            <td style={{ display: "flex", gap: "10px" }}>
                                                <button type="button" className="mma-btn mma-approve-access-btn" onClick={() => approveLandRequest(i.userPropertyId)}>
                                                    Approve
                                                </button>
                                                <button type="button" className="mma-btn  mma-reject-access-btn" onClick={() => rejectLandRequest(i.userPropertyId)}>
                                                    Reject
                                                </button>
                                            </td>
                                        </tr>
                                    ) : <tr><td colSpan={4}> There are no pending requests</td></tr>}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="pad-top-2">
                        <div style={{ textAlign: "left" }}>Business Info Requests</div>
                        <div className="table-div">
                            <table className="styled-table" id="active-manager-table">
                                <thead>
                                    <tr>
                                        <td>User Id</td>
                                        <td>Property Name</td>
                                        <td>Business Type</td>
                                        <td>Details</td>
                                        <td>Actions</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {businessInforequestList.length > 0 ? businessInforequestList.map(j =>
                                        <tr>
                                            <td>{j.userId}</td>
                                            <td>{j.property}</td>
                                            <td>{j.businessType}</td>
                                            <td>{j.details}</td>
                                            <td style={{ display: "flex", gap: "10px" }}>
                                                <button type="button" className="mma-btn mma-approve-access-btn" onClick={() => approveBusinessRequest(j.bId)}>
                                                    Approve
                                                </button>
                                                <button type="button" className="mma-btn  mma-reject-access-btn" onClick={() => rejectBusinessRequest(j.bId)}>
                                                    Reject
                                                </button>
                                            </td>
                                        </tr>
                                    ) : <tr><td colSpan={4}> There are no pending requests</td></tr>}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="pad-top-2">
                        <div style={{ textAlign: "left" }}>Ancestors Details</div>
                        <div className="table-div">
                            <table className="styled-table" id="active-manager-table">
                                <thead>
                                    <tr>
                                        <td>Ancestor Id</td>
                                        <td>Ancestor Name</td>
                                        <td>Children</td>
                                        <td>Dob</td>
                                        <td>isAlive</td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {ancestors.length > 0 ? ancestors.map(j =>
                                        <tr>
                                            <td>{j.ancestorId}</td>
                                            <td>{j.ancestorName}</td>
                                            <td>{j.children}</td>
                                            <td>{j.dob}</td>
                                            <td>{j.isAlive === "1" ? "Yes" :"No"}</td>
                                        </tr>
                                    ) : <tr><td colSpan={4}> There are no ancestors</td></tr>}
                                
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
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