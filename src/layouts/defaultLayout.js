import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import "./defaultLayout.css";

const DefaultLayout = ({ children }) => {
  return (
    <div className="main bg-mainbgc text-mainco h-full flex flex-col justify-between">
      <Navbar />

      <div className="container flex ">
        <div className="menuContainer w-64 py-1 px-5 border-r-2 border-softbgc border-solid ">
          <Menu />
        </div>
        <div className="contentContainer w-full py-1 px-5">
          <main>{children}</main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DefaultLayout;
