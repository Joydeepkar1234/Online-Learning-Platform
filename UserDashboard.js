import React from 'react';
import { Typography, Grid, Card, CardContent, Button, LinearProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UserDashboard = ({ enrolledCourses }) => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        My Dashboard
      </Typography>
      <Typography variant="body1" gutterBottom>
        Track your learning progress and pick up where you left off.
      </Typography>
      <Grid container spacing={2}>
        {enrolledCourses.map((course) => (
          <Grid item xs={12} md={6} key={course.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{course.title}</Typography>
                <Typography>Progress: {course.progress}%</Typography>
                <LinearProgress
                  variant="determinate"
                  value={course.progress}
                  style={{ margin: '10px 0' }}
                />
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => navigate(`/lessons/${course.nextLessonId}`)}
                >
                  Continue Learning
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default UserDashboard;