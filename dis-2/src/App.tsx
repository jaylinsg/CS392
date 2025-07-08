import React from 'react';
import CourseStaff from './components/course-staff';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Course Staff</h1>

      {/* Task 6: Reuse component three times */}
      <CourseStaff name="Jordan Walke" title="React Creator" rating={95} />
      <CourseStaff name="Dan Abramov" title="React Core Team" rating={90} />
      <CourseStaff name="Sophie Alpert" title="React Maintainer" rating={85} />
    </div>
  );
}

export default App;
