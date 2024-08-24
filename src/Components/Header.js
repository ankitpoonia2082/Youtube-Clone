import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggle } from "../utils/slices/sidebarSlice";


const Header = () => {
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();
  // Sidebar toggle handler function...
  const handelToggle = () => {
    dispatch(toggle())
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 h-14 items-center">
      {/* Menu Button to toggel Sidebar and Logo */}
      <div className="flex col-span-1">
        <img
          className="h-6 cursor-pointer"
          src="https://www.svgrepo.com/show/506800/burger-menu.svg"
          alt="Menu"
          onClick={handelToggle}
        />

        <img
          className="h-6 ml-3"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="Logo"
        />
      </div>

      {/* Searchbar  */}
      <div className="col-span-10 flex justify-center items-center text-center">
        <input
          className="w-2/4 h-full text-lg border rounded-l-full px-3 py-2"
          value={searchValue}
          onChange={(e) => { setSearchValue(e.target.value) }}
        />

        {/* Search Button */}
        <button
          className="border rounded-r-full px-3 py-2 mr-5 bg-gray-200">
          <img
            className="h-5"
            src="https://www.svgrepo.com/show/532551/search-alt-1.svg"
            alt="search" />
        </button>

        {/* Microphone Icon */}
        <button className="border border-l-0 bg-gray-200 rounded-full p-2">
          <img
            className="h-4"
            src="https://www.reshot.com/preview-assets/icons/HPXAVJFYC9/microphone-HPXAVJFYC9.svg"
            alt="microphone" />
        </button>
      </div>

      {/* User Section */}
      <div className="col-span-1">
        <button
          href=""
          className="flex p-3 text-blue-500 bg-gray-100 rounded-full">
          <img
            className="h-5 mr-2 rounded-full"
            src="https://www.svgrepo.com/show/532363/user-alt-1.svg"
            alt="" />
          Signin
        </button>
      </div>
    </div>
  );
};

export default Header;
