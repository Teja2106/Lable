import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Edithealth from "./components/edit/Edithealth";
import Editinfo from "./components/edit/Editinfo";
import Editid from "./components/edit/Editid";
import Editcontact1 from "./components/edit/Editcontact1";
import Dashboard from "./components/Dashboard";
import Auth from './components/auth/Auth';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
// import Otp from './components/auth/Otp';
import Verify from './components/auth/Verify';



function App() {
  
  return (
    <Router>
      <Routes> 
        <Route path="/dashboard" element={< Dashboard />} />
        <Route path="/edit/health" element={< Edithealth/>} />
        <Route path="/edit/info" element={< Editinfo/>}/>
        < Route path="/edit/id" element={< Editid/>} />
        < Route path="/edit/contacts/1" element={< Editcontact1/>}/>
        < Route path='/auth' element={<Auth/>}/>
        < Route path="/login" element={<Login/>}/>
        < Route path="/signup" element={<Signup/>}/>
        {/* < Route path='/auth/login/otp' element={ <Otp/>}/> */}
        < Route path="/login/verify-otp" element={<Verify/>}/>
      </Routes>
    </Router>
  );
}

export default App
