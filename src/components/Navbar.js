const Navbar = () => {
  return (
    <div className="navbar flex w-full p-5 justify-between">
      <div className="logo flex items-center gap-2.5">
        <img src="./logo.svg" alt="logo" />
        <span>Personal University</span>
      </div>
      <div className="icons flex items-center gap-4">
        <img src="./search.svg" alt="search-icon" />
        <img src="./app.svg" alt="icon" />
        <img src="./expand.svg" alt="icon" />

        <div className="notification relative">
          <img src="./notifications.svg" alt="logo" />
          <span className="bg-red-500 text-white text-xs w-4 h-4 rounded-full absolute -top-2 -right-2 flex justify-center items-center">
            2
          </span>
        </div>
        <div className="user flex items-center gap-2">
          <img src="./profile.svg" alt="logo" />
          <span>Mauricio</span>
        </div>
        <img src="./setting.svg" alt="icon" />
      </div>
    </div>
  );
};

export default Navbar;
