import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#820917' }}>
            <Toolbar>
                <Box component="img" src="/logo.png" alt="Logo" sx={{ height: 40, marginRight: 2 }} />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    KL ERP
                </Typography>
                <Button color="inherit" component={Link} to="/timetable">Timetable</Button>
                <Button color="inherit" component={Link} to="/students">Students</Button>
                <Button color="inherit" component={Link} to="/courses">Courses</Button>
                <Button color="inherit" component={Link} to="/faculty">Faculty</Button>
                {localStorage.getItem('token') && (
                    <Button color="inherit" onClick={handleLogout}>Logout</Button>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
