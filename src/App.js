import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Timetable from './Components/Timetable';
import Students from './Components/Students';
import Courses from './Components/Courses';
import Faculty from './Components/Faculty';
import Main from './Components/Main';
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { Navigate } from 'react-router-dom';

const App = () => {
    const user = localStorage.getItem("token");

    return (
       <Router>
        <Navbar/>
        <Routes>
        {user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
        
            <Routes>
                
                <Route path="/timetable" element={<Timetable />} />
                <Route path="/students" element={<Students />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/faculty" element={<Faculty />} />
            </Routes>
        </Router>
    );
}

export default App;
