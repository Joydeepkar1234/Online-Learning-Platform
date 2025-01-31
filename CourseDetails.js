import React, { useState } from 'react';
import { fetchCourseDetails } from '../mocks/api';
import { Typography, List, ListItem, ListItemText, Button, Modal, Box, Card, CardContent } from '@mui/material';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { id } = useParams();
  const course = fetchCourseDetails(id);
  const [enrolled, setEnrolled] = useState(false);

  const handleEnroll = () => {
    setEnrolled(true);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        {course.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {course.description}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Syllabus
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Introduction"
            secondary="Get started with the basics of the course. Learn about the key concepts, tools, and technologies you'll be using throughout the program. This section will help you set up your development environment and understand the course structure."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Advanced Topics"
            secondary="Dive deeper into advanced concepts such as state management, performance optimization, and advanced design patterns. This section will challenge you to apply your knowledge to solve complex problems and build scalable applications."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Project"
            secondary="Apply everything you've learned by building a real-world project. This project will cover all aspects of the course, from planning and design to implementation and deployment. By the end, you'll have a fully functional application to showcase in your portfolio."
          />
        </ListItem>
     </List>

      <Typography variant="body2" color="textSecondary" gutterBottom>
        Instructor: {course.instructor}
      </Typography>

      <Typography variant="h6" gutterBottom>
        Reviews
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="body2">
            "This course was fantastic! I learned so much."
          </Typography>
          <Box display="flex" alignItems="center" mt={1}>
            {/* <Avatar src="/path/to/avatar.jpg" /> */}
            <Typography variant="body2" style={{ marginLeft: '10px' }}>
              - Joydeep Kar
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Button variant="contained" color="primary" onClick={handleEnroll}>
        Enroll in Course
      </Button>

      <Modal open={enrolled} onClose={() => setEnrolled(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Enrollment Successful!
          </Typography>
          <Typography variant="body2" gutterBottom>
            You have been enrolled in {course.title}. Start learning now!
          </Typography>
          <Button variant="contained" color="primary" onClick={() => setEnrolled(false)}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default CourseDetails;