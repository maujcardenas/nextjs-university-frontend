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

  const calculateProgressWithCurrentCourses = (currentSubjects) => {
    let sumStudiedHours = 0;
    let sumRequiredHours = 0;
    currentSubjects.forEach((item) => {
      sumStudiedHours = sumStudiedHours + item.attributes.currentCourseHours;
      sumRequiredHours =
        sumRequiredHours +
        item.attributes.subject.data.attributes.hoursForCompletion;
    });
    const totalP = sumStudiedHours / sumRequiredHours;
    return totalP;
  };

  return (
    <div>
      <div className="flex gap-4 items-end">
        <div>
          <h3 className="uppercase text-sm">Completion Progress</h3>
          <progress
            className="progress progress-warning w-96"
            value={calculateProgressWithCurrentCourses(currentSubjects)}
            max={1}
          ></progress>
        </div>
        <div>
          <p className="text-sm w-96">
            Your current progress with the courses registered is{" "}
            <span className="text-green-500">
              {" "}
              {calculateProgressWithCurrentCourses(currentSubjects).toFixed(
                4
              )}{" "}
            </span>
          </p>
        </div>
      </div>

      <table className="table ">
        <thead>
          <tr>
            <th>Current Segment</th>
            <th className="min-w-72">Course</th>
            <th>Department</th>
            <th>Hours Completed</th>
            <th>Hours for Completion</th>
            <th>Progress</th>
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
              <td>
                <progress
                  className="progress progress-accent w-24"
                  value={item.attributes.currentCourseHours}
                  max={
                    item.attributes.subject.data.attributes.hoursForCompletion
                  }
                ></progress>
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
