import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const courseData = [
    { id: "C001", name: "Computer Science", instructor: "Dr. Alice Johnson" },
    { id: "C002", name: "Mathematics", instructor: "Dr. John Smith" },
    { id: "C003", name: "Physics", instructor: "Dr. Emily Brown" },
    { id: "C004", name: "Chemistry", instructor: "Dr. Robert White" },
    { id: "C005", name: "Biology", instructor: "Dr. Lisa Green" }
];

const Courses = () => {
    return (
        <Box p={2}>
            <Typography variant="h4">Course List</Typography>
            <List>
                {courseData.map(course => (
                    <ListItem key={course.id}>
                        <ListItemText
                            primary={course.name}
                            secondary={`ID: ${course.id} - Instructor: ${course.instructor}`}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default Courses;
