import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const facultyData = [
    { name: "Dr. Alice Johnson", department: "Computer Science", email: "alice.johnson@school.edu" },
    { name: "Dr. John Smith", department: "Mathematics", email: "john.smith@school.edu" },
    { name: "Dr. Emily Brown", department: "Physics", email: "emily.brown@school.edu" },
    { name: "Dr. Robert White", department: "Chemistry", email: "robert.white@school.edu" },
    { name: "Dr. Lisa Green", department: "Biology", email: "lisa.green@school.edu" }
];

const Faculty = () => {
    return (
        <Box p={2}>
            <Typography variant="h4">Faculty List</Typography>
            <List>
                {facultyData.map(faculty => (
                    <ListItem key={faculty.email}>
                        <ListItemText
                            primary={faculty.name}
                            secondary={`Department: ${faculty.department} - Email: ${faculty.email}`}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default Faculty;
