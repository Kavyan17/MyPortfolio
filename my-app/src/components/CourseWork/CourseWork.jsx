import React from 'react';
import courseData from '../../data/CourseWork.json';
import '../../styles/Coursework.css';
import utdLogo from '../../assets/UTD.jpeg';
import purdueLogo from '../../assets/PFW.jpeg';


const Coursework = () => {
  const getUniversityLogo = (university) => {
    switch (university) {
      case "The University of Texas at Dallas":
        return utdLogo;
      case "Purdue University":
        return purdueLogo;
      default:
        return null;
    }
  };  
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
            <div className="course-header">
                <img src={getUniversityLogo(course.assosciated_with)} alt={course.assosciated_with} className="course-logo" />
                <span className="course-code">{course.course_no}</span>
              </div>
              <p><strong>Grade:</strong> {course.grade}</p>
              <p><strong>Topics:</strong> {course.topics}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coursework;
