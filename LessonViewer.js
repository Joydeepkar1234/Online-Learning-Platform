import React, { useState } from 'react';
import { Typography, Button, Box, List, ListItem, ListItemText, Grid,  } from '@mui/material';
import { Navigate, useParams } from 'react-router-dom';

const LessonViewer = ({ lessons }) => {
  const { lessonId } = useParams();
  const [completed, setCompleted] = useState(false);
  const lesson = lessons.find((lesson) => lesson.id === parseInt(lessonId, 10));

  const handleMarkComplete = () => {
    setCompleted(true);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            {lesson.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {lesson.content}
          </Typography>
          <Button variant="contained" color="primary" onClick={handleMarkComplete}>
            Mark as Complete
          </Button>
          {completed && (
            <Box mt={2} p={2} bgcolor="success.light" color="white" borderRadius={2}>
              <Typography variant="body1">Lesson marked as complete</Typography>
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Lessons
          </Typography>
          <List>
            {lessons.map((lesson) => (
              <ListItem button key={lesson.id} onClick={() => Navigate(`/lessons/${lesson.id}`)}>
                <ListItemText primary={lesson.title} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default LessonViewer;