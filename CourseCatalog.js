import React, { useState, useEffect } from 'react';
import { fetchCourses } from '../mocks/api';
import { Button, Card, CardContent, Typography, Grid, TextField, MenuItem, Select, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CourseCatalog = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setCourses(fetchCourses());
  }, []);

  const filteredCourses = courses
    .filter(course => course.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'price') return a.price - b.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div style={{ padding: '20px' }}>
      <TextField
        label="Search Courses"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Select value={sort} onChange={(e) => setSort(e.target.value)} displayEmpty>
          <MenuItem value="">Sort By</MenuItem>
          <MenuItem value="price">Price</MenuItem>
          <MenuItem value="rating">Rating</MenuItem>
        </Select>
      </Box>
      <Grid container spacing={2}>
        {filteredCourses.map(course => (
          <Grid item xs={12} md={4} key={course.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{course.title}</Typography>
                <Typography>Category: {course.category}</Typography>
                <Typography>Price: ${course.price}</Typography>
                <Typography>Rating: {course.rating}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate(`/courses/${course.id}`)}
                >
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CourseCatalog;