import React, { useState, useEffect } from "react";
import useWindowDimensions from "./Dimensions";
import { Link } from "react-router-dom";
import axios from "axios";
import '../chat.css';
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
const Chat = () => {
  
  const [currentUser, setCurrentUser] = useState({});
  const [inputMessage, setInputMessage] = useState('');
  const { height, width } = useWindowDimensions();
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  let userId = 1;
  let i;
  const[users, setUsers] = useState([]);
  useEffect(()=>{
    getAllUsers();
  },[])
  async function getAllUsers() {
        const config = {
            method: 'get',
            url: 'http://bat5491.uta.cloud/php/getUsers.php'
        };

        let res = await axios(config);
        setUsers(res.data.filter(user => (user.userId !== currentUser.userId)));
        console.log(users);
    }



  const [chatUsers, setChatUsers] = useState([
  ]);

  let currentUser1;
  if (window.sessionStorage.getItem("userDetails")) {
    currentUser1 = JSON.parse(window.sessionStorage.getItem("userDetails"));
    // console.log(currentUser1);
  }
  
  function displayChat(userId) {
    users.forEach((user) => {
      if (user.userId === userId) {
        setCurrentUser(user);
      }
    });
    if (width < 768) {
      document.getElementById('side-bar').style.display = 'none';
      document.getElementById('chat-container').style.display = 'block';
      document.getElementById('chat-container').style.width = '100%';
    }
  }

  function closeChat() {
    document.getElementById('side-bar').style.display = 'block';
    document.getElementById('chat-container').style.display = 'none';
    document.getElementById('side-bar').style.width = '100%';
  }

  function showSendMessage() {
    let message = document.getElementById("chat-message-input").value;
    if (message.length > 0) {
      document.getElementById("send-message-icon").style.display = "block";
    }
    else {
      document.getElementById("send-message-icon").style.display = "none";
    }
  }

  function showSearchResults(e) {
    setSearchQuery(e.target.value);

    let chatIds = [];
    let x = [];
    chatUsers.forEach(x => chatIds.push(x.userId));
    if (searchQuery.length >= 3) {
      users.forEach((user) => {
        if (
          (user.firstName.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1 ||
            user.lastName.toLowerCase().indexOf(searchQuery.toLowerCase()) >
            -1) &&
          user.userId !== userId && !chatIds.includes(user.userId)
        ) {
          x.push(user);
        }
      });
      setFilteredUsers(x);
      //addUsers();
      // document.getElementById("search-results").style.display = "block";
    } else {
      setFilteredUsers([]);
      //document.getElementById("search-results").style.display = "none";
    }
  }

  const chats = document.getElementsByClassName("single-user");

  Array.from(chats).forEach((element) => {
    element.addEventListener("click", () => {
      Array.from(chats).forEach((element) => {
        element.classList.remove("active-chat");
      });
      element.classList.add("active-chat");
    });
  });

  function sendMessageTo(chatUserId) {
    let msg = filteredUsers.filter(user => user.userId === chatUserId);
    setFilteredUsers([]);
    chatUsers.unshift(msg[0]);
  }

  function showSendMessageBtn(e) {
    setInputMessage(e.target.value);
  }

  function sendMessage(e) {
    setInputMessage('');
  }
  return (
    currentUser1?
      <>
      <PageHeader />
        <div className="chat-main-div">
          <div className="chat-content">
            <div className="side-bar" id="side-bar">
              <div className="search-div">
                <div style={{ width: "fit-content" }}>
                  <input
                    type="text"
                    placeholder="Search users"
                    name="search-users"
                    id="search-users"
                    autoComplete="off"
                    value={searchQuery}
                    onChange={showSearchResults}
                  />
                </div>
                <div className="search-results" id="search-results" style={filteredUsers.length > 0 ? { display: "block" } : { display: "none" }}>
                  {filteredUsers.length > 0 ? filteredUsers.map(i => {
                    return (
                      <div className="search-result-user" onClick={() => sendMessageTo(i.userId)}>
                        <div className="search-user-image"></div>
                        <div className="search-results-name-container">
                          <div className="search-results-name">
                            <div>
                              {i.lastName}
                            </div>
                            <div>
                              {i.firstName}
                            </div>
                          </div>
                          <div className='search-results-role'>
                            {i.role}
                          </div>
                        </div>
                      </div>
                    )
                  }) : <div>No users found</div>}
                </div>
              </div>
              <div className="users-div" id="users-div">
                {chatUsers.length > 0 ? chatUsers.map(el =>
                  <div className="single-user" id={el.userId} onClick={() => displayChat(el.userId)}>
                    <div className="profile-image"></div>
                    <div className="name-div">
                      <div>{el.lastName}</div>
                      <div>{el.firstName}</div>
                    </div>
                  </div>) : <div></div>}
              </div>
            </div>
            <div className="chat-container" id="chat-container">
              <div className="no-chat" id="no-chat" style={Object.keys(currentUser).length === 0 ? { display: 'flex' } : { display: 'none' }}>
                <div className="no-chat-image"></div>
                <div>Please select a coversation to start messaging</div>
              </div>
              <div className="sigle-user-chat" id="sigle-user-chat" style={Object.keys(currentUser).length !== 0 ? { display: 'block' } : { display: 'none' }}>
                <div className="chat-name-div">
                  <div id="back-arrow" onClick={closeChat}>
                  </div>
                  <div className="chat-profile-img"></div>
                  <div className="chat-name">
                    <div> {currentUser ? currentUser.lastName : ''} </div>
                    <div> {currentUser ? currentUser.firstName : ''}</div>
                  </div>
                </div>
                <div className="chat-message-container"></div>
                <div className="send-message-div">
                  <div style={{ flexGrow: "2" }}>
                    <input type="text" placeholder="Type your message..." name="message"
                      value={inputMessage} className="chat-message-input"
                      id="chat-message-input" onChange={showSendMessageBtn}
                      autoComplete="nope" />
                  </div>
                  <div>
                    <div className="send-message-icon" id="send-message-icon" style={inputMessage.length > 0 ? { display: 'block' } : { display: "none" }} onClick={sendMessage}>
                      <div className="send-message-image">
                        send
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      :
      <>
        <div style={{ marginTop: "200px" }}>

          You are not authorised to access this page. Please
          <Link to="/login" style={{ color: "red" }}> login </Link>  to view this page.
        </div>
        <PageFooter />
      </>
  )
}

export default Chat;