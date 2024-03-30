import DefaultLayout from "../layouts/defaultLayout";
import "./tailwind.css";
import CurrentCoursesMini from "@/components/CurrentCoursesMini";

function StudentsPage() {
  return (
    <DefaultLayout>
      <h1 className="text-3xl">Students Page</h1>
      <p>Students students</p>
      <CurrentCoursesMini />
    </DefaultLayout>
  );
}

export default StudentsPage;
