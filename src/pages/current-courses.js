import DefaultLayout from "../layouts/defaultLayout";
import "./tailwind.css";

import CurrentCourses from "../components/CurrentCourses";
import SegmentProgress from "@/components/SegmentProgress";

function CurrentCoursesPage() {
  return (
    <div>
      <DefaultLayout>
        <h1 className="uppercase text-sm mb-3">
          Current Courses for Mauricio Cárdenas{" "}
        </h1>
        <SegmentProgress />
        <CurrentCourses />
      </DefaultLayout>
    </div>
  );
}

export default CurrentCoursesPage;
