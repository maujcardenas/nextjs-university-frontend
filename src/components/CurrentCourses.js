import React from "react";
import { fetchCurrentSubjects } from "../app/data/fetchData";
import { useEffect, useState } from "react";

const CurrentCourses = () => {
  const studentSlug = "mauri-cardenas";
  const [currentSubjects, setCurrentSubjects] = useState([]);

  useEffect(() => {
    async function getCurrentSubjects() {
      const data = await fetchCurrentSubjects(studentSlug);
      if (data) {
        console.log(data);
        setCurrentSubjects(data.data);
      }
    }
    getCurrentSubjects();
  }, []);

  return (
    <div>
      <h1>Current Courses</h1>

      <table className="table ">
        <thead>
          <tr>
            <th>Current Segment</th>
            <th className="min-w-72">Course</th>
            <th>Department</th>
            <th>Hours Completed</th>
            <th>Hours for Completion</th>
            <th>Is Completed?</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {currentSubjects.map((item) => (
            <tr key={item.id}>
              <td>
                <span>
                  {item.attributes.segment.data.attributes.startDateSegment}
                </span>
                <span className="text-green-500"> to </span>
                <span>
                  {item.attributes.segment.data.attributes.finishDateSegment}
                </span>
              </td>
              <th>{item.attributes.subject.data.attributes.subjectTitle}</th>
              <td className="uppercase text-green-500">
                {item.attributes.subject.data.attributes.Department}
              </td>
              <td>{item.attributes.currentCourseHours}</td>
              <td>
                {item.attributes.subject.data.attributes.hoursForCompletion}
              </td>
              <td>{item.attributes.isCompleted ? "Yes" : "No"}</td>
              <td>{item.attributes.Grade}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Current Segment</th>
            <th className="min-w-72">Course</th>
            <th>Department</th>
            <th>Hours Completed</th>
            <th>Hours for Completion</th>
            <th>Is Completed?</th>
            <th>Grade</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CurrentCourses;
