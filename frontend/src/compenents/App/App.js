import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import '../Users/styleuser.css'
import PageCalendar from '../Emploi/PageCalendar';
import Login from '../Users/Login'
import SingUp from '../Users/SignUp'
import Home from '../Home';
function App() {
  return (
    <div>
      
      <Router>
     
        <Routes>
          <Route  exact path="/" element={<Home />}></Route>
        <Route exact path="/calendar" element={<PageCalendar />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SingUp />} />
        </Routes>
      
      </Router>

    </div>

  );
}

export default App;
