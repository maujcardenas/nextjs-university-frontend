import DefaultLayout from "../layouts/defaultLayout";
import "./tailwind.css";

import CurrentCourses from "../components/CurrentCourses";

function CurrentCoursesPage() {
  return (
    <div>
      <DefaultLayout>
        <h1>The Current Courses for Mauri C:</h1>

        <CurrentCourses />
      </DefaultLayout>
    </div>
  );
}

export default CurrentCoursesPage;
