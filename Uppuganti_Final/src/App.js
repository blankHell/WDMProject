import './App.css';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import ContactUsPage from './components/ContactUsPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import MemberHome from './components/MemberHome';
import AdminHome from './components/AdminHome';
import Reports from './components/Reports';
import Chat from './components/Chat';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import "bootstrap-icons/font/bootstrap-icons.css";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<PageHeader />}> */}
        <Route index element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactuspage" element={<ContactUsPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/memberhome" element={<MemberHome />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/chat" element={<Chat />} />
        
        
        {/* <Route path="*" element={<NoPage />} /> */}
      {/* </Route> */}
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;

/* CREATED BY :

1. Lakshmi Radha Yashwanth Uppuganti - 1001964009
2. Bhargava Manikanta Aditya Tummalapenta - 1001965491
3. Sravani Ravipati - 1001949731 */ 