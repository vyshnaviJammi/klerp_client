import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const studentData = [
    { name: "John Doe", id: "S001", course: "Computer Science" },
    { name: "Jane Smith", id: "S002", course: "Mathematics" },
    { name: "Sam Brown", id: "S003", course: "Physics" },
    { name: "Lisa Ray", id: "S004", course: "Chemistry" },
    { name: "Tom Hardy", id: "S005", course: "Biology" }
];

const Students = () => {
    return (
        <Box p={2}>
            <Typography variant="h4">Student List</Typography>
            <List>
                {studentData.map(student => (
                    <ListItem key={student.id}>
                        <ListItemText
                            primary={student.name}
                            secondary={`ID: ${student.id} - Course: ${student.course}`}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default Students;
