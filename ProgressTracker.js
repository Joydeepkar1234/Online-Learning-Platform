import React from 'react';
import { LinearProgress, Typography } from '@mui/material';

const ProgressTracker = ({ progress }) => (
  <div>
    <Typography variant="h6">Progress: {progress}%</Typography>
    <LinearProgress variant="determinate" value={progress} />
  </div>
);

export default ProgressTracker;