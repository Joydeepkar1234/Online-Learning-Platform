import React from 'react';
import { Button, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <Box textAlign="center" py={10} bgcolor="primary.main" color="white" borderRadius={2}>
        <Typography variant="h2" gutterBottom>
           Online Learning Platform
        </Typography>
        <Typography variant="h5" gutterBottom>
          Start your learning journey today!
        </Typography>
        <Button
          variant="outlined"
          color="white"
          onClick={() => navigate('/courses')}
        >
         Browse Courses
        </Button>
      </Box>
      <Typography variant="h4" gutterBottom style={{ marginTop: '40px' }}>
        Featured Courses
      </Typography>
      <Grid container spacing={3}>
        {['Web Development', 'Data Science', 'Digital Marketing'].map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{course}</Typography>
                <Typography variant="body2">
                  Learn the latest in {course.toLowerCase()} with expert instructors.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h4" gutterBottom style={{ marginTop: '40px' }}>
        Categories
      </Typography>
      <Grid container spacing={3}>
        {['Technology', 'Business', 'Design', 'Health'].map((category, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{category}</Typography>
                <Typography variant="body2">
                  Explore courses in {category.toLowerCase()} to build your skills.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h4" gutterBottom style={{ marginTop: '40px' }}>
        Testimonials
      </Typography>
      <Grid container spacing={3}>
        {[
          { name: 'Joydeep Kar', feedback: 'Highly recommended!' },
          { name: 'Harsh Yadav', feedback: 'Amazing courses!' },
          { name: 'Rohit Kundu', feedback: 'I love the lessons!' },
        ].map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{testimonial.name}</Typography>
                <Typography variant="body2">"{testimonial.feedback}"</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;