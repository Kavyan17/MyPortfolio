import React from 'react';
import courseData from '../../data/CourseWork.json';
import '../../styles/Coursework.css';

const Coursework = () => {
  return (
    <div className="course-container">
      {/* <h2 className="course-title">📚 My Coursework Journey</h2> */}

      <div className="bookshelf">
        {courseData.map(course => (
          <div key={course.id} className="book">
            <div className="book-cover">
              <h3>{course.title}</h3>
            </div>
            <div className="book-content">
              <p><strong>Course:</strong> {course.course_no}</p>
              <p><strong>University:</strong> {course.assosciated_with}</p>
              <p><strong>Grade:</strong> {course.grade}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coursework;
