import Title from "./Title"
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
import React, { useEffect, useState } from "react";
import axios from 'axios';


export default function HomePage() {

    useEffect(() => {
        getApprovedBusinessInfo();

    }, [])

    const [approvedBusinessInfoList, setapprovedBusinessInfoList] = useState([]);

    async function getApprovedBusinessInfo() {
        const config = {
            method: 'get',
            url: 'http://bat5491.uta.cloud/php/getApprovedBusinessInfo.php'
        }

        let res = await axios(config)
        setapprovedBusinessInfoList(res.data.businessInfo);
    }

    return (
        <>
            <PageHeader />
            <div className="maindiv" >
                <div>
                    <Title name="Welcome to Diaz Family" />
                    <div className="pad-top pad-bottom centered" style={{width:'60rem'}}>      
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <Title name="Projects" />
                    <div className="pad-top pad-bottom centered">
                        <div className="pad-top pad-bottom centered">Active Ongoing Projects</div>
                        <div className="table-div">
                            <table className="styled-table" id="active-manager-table">
                                <thead>
                                    <tr>
                                        <td>User Id</td>
                                        <td>Property Name</td>
                                        <td>Business Type</td>
                                        <td>Details</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {approvedBusinessInfoList.length > 0 ? approvedBusinessInfoList.map(j =>
                                        <tr>
                                            <td>{j.userId}</td>
                                            <td>{j.property}</td>
                                            <td>{j.businessType}</td>
                                            <td>{j.details}</td>
                                        </tr>
                                    ) : <tr><td colSpan={4}> There are no pending requests</td></tr>}
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