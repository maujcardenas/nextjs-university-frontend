import DefaultLayout from "../layouts/defaultLayout";
import "./tailwind.css";
import { fetchSubjects } from "./fetchData";

import { useEffect, useState } from "react";

function CoursesPage() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    async function getSubjects() {
      const data = await fetchSubjects();
      if (data) {
        console.log(data);
        setSubjects(data.data);
      }
    }
    getSubjects();
  }, []);

  return (
    <DefaultLayout>
      <div className="coursespage grid grid-cols-4 gap-2 grid-auto-rows-minmax">
        {subjects.map((item) => (
          <div
            key={item.id}
            className="block1 py-3 px-2 rounded-md bg-softbgc col-span-2 text-sm grid grid-cols-3 gap-5"
          >
            <div className="col-span-1">
              <h2 className="text-sm uppercase text-green-200">
                {item.attributes.Department}
              </h2>
            </div>
            <div className="col-span-2 flex flex-col justify-start">
              <h2 className="text-lg font-bold uppercase">
                {item.attributes.subjectTitle}
              </h2>
              {/* <span className="font-bold inline-block">Description:</span> */}
              <p className="inline-block">
                {item.attributes.subjectDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </DefaultLayout>
  );
}

export default CoursesPage;
