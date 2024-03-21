import DefaultLayout from "../layouts/defaultLayout";
import "./tailwind.css";

function AboutPage() {
  return (
    <div>
      <DefaultLayout>
        <h1>About Us</h1>
        <p className="">
          This is a personal university app, where you can study what you want!.
        </p>
      </DefaultLayout>
    </div>
  );
}

export default AboutPage;
