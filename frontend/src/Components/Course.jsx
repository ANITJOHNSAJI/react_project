import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import axios from 'axios';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8001/api/courses/')

      .then(res => setCourses(res.data))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <>
      <div>
        <Nav />
        <h1>Our Courses</h1>
        <div className="courses">
          {courses.map(course => (
            <div key={course.id} className="card">
              {course.image && (
                <img 
                  src={`http://localhost:8000/${course.image}`} 
                  alt={course.title} 
                />
              )}
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p><strong>Duration:</strong> {course.duration}</p>
              <p><strong>Eligibility:</strong> {course.eligibility}</p>
              <p><strong>Fee:</strong> ₹{course.fee}</p>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default CourseList;
