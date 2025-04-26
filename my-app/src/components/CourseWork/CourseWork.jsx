import React, { useRef } from 'react';
import courseData from '../../data/CourseWork.json';
import '../../styles/Coursework.css';
import pageTurnSound from '../../assets/page-turn.mp3';

const Coursework = () => {
  const audioRef = useRef(null);

  const handleHover = (e) => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    const pages = e.currentTarget.querySelector('.book-pages');
    pages.classList.add('turn-page');
  };

  return (
    <div className="course-container">
      <h2 className="course-title">📚 My Coursework Journey</h2>

      {/* Put audio here */}
      <audio ref={audioRef} src={pageTurnSound} preload="auto" />

      <div className="bookshelf">
        {courseData.map(course => (
          <div key={course.id} className="book" onMouseEnter={handleHover}>
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
