export const fetchCourses = () => [
  { id: 1, title: "Basic React", category: "Development", price: 50, rating: 4.5 },
  { id: 2, title: "UI/UX Design", category: "Design", price: 30, rating: 4.2 },
  { id: 3, title: "Data Science", category: "SQL", price: 80, rating: 4.6},
  { id: 4, title: "Marketing", category: "Creative Content", price: 70, rating: 4.3},
  
];

export const fetchCourseDetails = (id) => ({
  id,
  title: `Course ${id} Details`,
  description: `Description for course ${id}`,
  syllabus: ["Introduction", "Advanced Topics", "Project"],
  instructor: "Joydeep Kar",
});

export const fetchEnrolledCourses = () => [
  { id: 1, title: "React Basics", progress: 70, nextLessonId: 101 },
  { id: 2, title: "UI/UX Design", progress: 40, nextLessonId: 201 },
  { id: 3, title: "Data Science", progress: 60, nextLessonId: 301},
  { id: 4, title: "Marketing", progress: 50, nextLessonId: 401}
];

export const fetchLessons = () => [
  { id: 101, title: "Lesson 1: Introduction to React", content: "Learn the basics of React." },
  { id: 201, title: "Lesson 1: Basics of UI/UX", content: "Introduction to UI/UX design." },
  { id: 301, title: "Lesson 1: Data Science", content: "Introduction to SQL course."},
  { id: 401, title: "Lesson 1: Marketing", content: "Introduction to content writing."},
];