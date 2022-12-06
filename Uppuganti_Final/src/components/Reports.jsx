import React, { useState, useEffect } from "react";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
import Chart from "react-google-charts";
import axios from "axios";
const ViewReportsAdmin = () => {
  let currentUser;
  if (window.sessionStorage.getItem("userDetails")) {
    currentUser = JSON.parse(window.sessionStorage.getItem("userDetails"));
  }

  useEffect(() => {
    getUsers();
    getData();
  }, []);
  const [users, setUsers] = useState([]);
  const [showChart, setShowChart] = useState('');
  const [data, setData] = useState([]);
  // const [ctmVisitorData , setCtmVisitorData] = useState([])
  async function getUsers() {
    const config = {
      method: 'get',
      url: 'http://bat5491.uta.cloud/php/getTrailCount.php'
    }

    let res = await axios(config)
    setUsers(res.data);
  }
  useEffect(() => {
    console.log("running")
  //   setCtmVisitorData([
  //   ['Type', 'Count'],
  //   ['Trails', parseInt(data[0])],
  //   ['Business', parseInt(data[1])],
  //   ['UserProperties', parseInt(data[2])]
  
  // ])
  // console.log(ctmVisitorData)
  
  }, [data])
  
  async function getData() {
    const config = {
      method: 'get',
      url: 'http://bat5491.uta.cloud/php/getData.php'
    }

    let res = await axios(config)
    setData(res.data);
  }
  let ctmData = [[
    'userId',
    'Count',
  ]];
  users.forEach(x => ctmData.push([x.userId, parseInt(x.Count)]));

  // let ctmVisitorData = [
  //   ['Type', 'Count']
  // ];
  // ctmVisitorData.push(['Trails', parseInt(data[0])])
  // ctmVisitorData.push(['Business', parseInt(data[1])])
  // ctmVisitorData.push(['UserProperties', parseInt(data[2])])  

  // console.log(ctmVisitorData);
  const ctmVisitorData = [ ['Type', 'Count'],
    ['Trails', 1],
    ['Business', 2],
    ['UserProperties',3]]
  function changeChart(e) {
    let option = e.target.value;
    setShowChart(option);
  }
  return (
    currentUser.userId === '1'?
    <>
    <PageHeader />
      <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
      <div className="main-div">
        <div className="main-title">View Reports</div>
        <div className="vra-content">
          <div className="vra-filters">
            <div>
              <select
                name="filter1"
                id="filter1"
                title="select an option"
                required
                value={showChart}
                onChange={changeChart}
              >
                <option disabled value=''>-- Choose an option --</option>
                <option value="users">Trails</option>
                <option value="data">Overall Data</option>
              </select>
            </div>
          </div>
          <div className="empty" id="empty" style={showChart === '' ? { display: "flex" } : { display: "none" }}>
            <div>Please select an option to view the reports</div>
          </div>
          <div>
            <div id="building-reports" style={showChart === 'users' ? { display: "block" } : { display: "none" }}>
              
              <Chart
                width={'800px'}
                height={'300px'}
                chartType="ComboChart"
                loader={<div>Loading Chart</div>}
                data={ctmData}
                options={{
                  title: 'Building Occupancy',
                  vAxis: { title: 'Numbers' },
                  hAxis: { title: 'Buildings' },
                  seriesType: 'bars',
                  series: { 3: { type: 'line' } },
                }}
                rootProps={{ 'data-testid': '1' }}
              />
            </div>
            <div id="visit-reports" style={showChart === 'data' ? { display: "block" } : { display: "none" }}>
              <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={ctmVisitorData}
                options={{
                  title: 'Visitors'
                }}
                rootProps={{ 'data-testid': '1' }}
              />
            </div>
          </div>
        </div>
      </div>
      <PageFooter />
    </>
    :
    <>Only Admins can access the reports.</>
  )
}

export default ViewReportsAdmin;