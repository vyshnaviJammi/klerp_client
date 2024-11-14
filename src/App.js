import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginSignup from './Components/LoginSignUp/LoginSignup';
import Courses from './Components/Courses';
import Faculty from './Components/Faculty';
import Students from './Components/Students';
import Timetable from './Components/Timetable';
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';


const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    return token ? children : <Navigate to="/login" />;
};

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<LoginSignup />} />
                <Route path="/login" element={<LoginSignup />} />
                <Route path="/Welcome" element={<PrivateRoute><Welcome /></PrivateRoute>} />
                <Route path="/courses" element={<PrivateRoute><Courses /></PrivateRoute>} />
                <Route path="/faculty" element={<PrivateRoute><Faculty /></PrivateRoute>} />
                <Route path="/students" element={<PrivateRoute><Students /></PrivateRoute>} />
                <Route path="/timetable" element={<PrivateRoute><Timetable /></PrivateRoute>} />
            </Routes>
        </Router>
    );
};

export default App;
