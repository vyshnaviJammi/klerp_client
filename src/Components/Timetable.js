import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const timetableData = [
    { day: "Monday", period1: "Math", period2: "English", period3: "Physics", period4: "Chemistry" },
    { day: "Tuesday", period1: "Biology", period2: "Math", period3: "History", period4: "Geography" },
    { day: "Wednesday", period1: "Computer Science", period2: "Math", period3: "English", period4: "Physics" },
    { day: "Thursday", period1: "Chemistry", period2: "Biology", period3: "History", period4: "Geography" },
    { day: "Friday", period1: "Computer Science", period2: "Math", period3: "English", period4: "Physics" }
];

const Timetable = () => {
    return (
        <Box p={2}>
            <Typography variant="h4">Timetable</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Day</TableCell>
                            <TableCell>Period 1</TableCell>
                            <TableCell>Period 2</TableCell>
                            <TableCell>Period 3</TableCell>
                            <TableCell>Period 4</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {timetableData.map((row) => (
                            <TableRow key={row.day}>
                                <TableCell>{row.day}</TableCell>
                                <TableCell>{row.period1}</TableCell>
                                <TableCell>{row.period2}</TableCell>
                                <TableCell>{row.period3}</TableCell>
                                <TableCell>{row.period4}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default Timetable;
