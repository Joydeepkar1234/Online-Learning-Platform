import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: [],
  enrolledCourses: [],
  status: 'idle',
};

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses(state, action) {
      state.courses = action.payload;
    },
    enrollCourse(state, action) {
      const course = state.courses.find((course) => course.id === action.payload);
      if (course) {
        state.enrolledCourses.push({ ...course, progress: 0 });
      }
    },
    updateProgress(state, action) {
      const { courseId, progress } = action.payload;
      const enrolledCourse = state.enrolledCourses.find((course) => course.id === courseId);
      if (enrolledCourse) {
        enrolledCourse.progress = progress;
      }
    },
  },
});

export const { setCourses, enrollCourse, updateProgress } = courseSlice.actions;
export default courseSlice.reducer;