import React from 'react';
import { Box, Typography } from '@mui/material';

const Welcome = () => {
    return (
        <Box p={2}>
            <Typography variant="h4">Welcome to KL ERP</Typography>
            <Typography variant="body1" mt={2}>
                We are delighted to have you on board! Explore the courses, faculty, timetable, and more.
            </Typography>
        </Box>
    );
}

export default Welcome;
