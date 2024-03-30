import React from "react";
import { fetchCurrentSubjects } from "../app/data/fetchData";
import { useEffect, useState } from "react";

const CurrentCoursesMini = () => {
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
      <div className="block1 p-5 bg-softbgc col-span-2 text-sm flex flex-col justify-between">
        <h2 className="uppercase">Current Courses</h2>
        {currentSubjects.map((item) => (
          <div key={item.div} className="flex justify-between px-1">
            <div className="flex gap-2 items-center">
              <div className="dot p-1 bg-red-500 rounded w-2 h-2"></div>
              <span>
                {item.attributes.subject.data.attributes.subjectTitle}
              </span>
            </div>
            <div>Progress Bar</div>
          </div>
        ))}
        <div>learn more</div>
      </div>
    </div>
  );
};

export default CurrentCoursesMini;
