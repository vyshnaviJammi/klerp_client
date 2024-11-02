import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
