import DefaultLayout from "../layouts/defaultLayout";
import "./tailwind.css";
import { fetchSubjects } from "../app/data/fetchData";

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
      <div className="coursespage ">
        <div className="overflow-x-auto">
          <table className="table ">
            <thead>
              <tr>
                <th>ID</th>
                <th>Department</th>
                <th className="min-w-72">Course</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td className="uppercase text-green-500">
                    {item.attributes.Department}
                  </td>
                  <th>{item.attributes.subjectTitle}</th>
                  <td>{item.attributes.subjectDescription}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th>ID</th>
                <th>Department</th>
                <th>Course</th>
                <th>Description</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default CoursesPage;
