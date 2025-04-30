import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import axios from 'axios';
import "./css/Style.css";



const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/courses/')
      .then(res => setCourses(res.data))
      .catch(err => console.error('Error:', err));
  }, []);

  const handleCourseClick = (courseId) => {
    navigate(`/courses/${courseId}`);
  };

  return (
    <>
      <Nav />
      <div className="courselist-maindiv">
        <h1 className="courselist-h1">Our Courses</h1>
        <div className="courselist-cards">
          {courses.map(course => (
            <div 
              key={course.id} 
              className="courselist-card"
              onClick={() => handleCourseClick(course.id)}
            >
              {course.image && (
                <img 
                  src={course.image}
                  alt={course.title}
                  className="courselist-image"
                />
              )}
              <div className="courselist-card-content">
                <h3 className="courselist-card-title">{course.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CourseList;
