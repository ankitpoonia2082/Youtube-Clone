import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggle } from "../utils/slices/sidebarSlice";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/contents";
import { useSelector } from "react-redux";
import { addCacheData } from "../utils/slices/searchCache";
import { Link, useNavigate } from "react-router-dom";


const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const [suggestionData, setSuggestionData] = useState([]);
  const [showSuggestions, setShowSuggestion] = useState(false);

  const navigate = useNavigate();

  // Catched Data...
  const cachedSearchData = useSelector((store) => store.searchCache);

  // Dispatch : to dispatch action to call reducer function...
  const dispatch = useDispatch();

  // Sidebar toggle handler function...
  const handelToggle = () => {
    dispatch(toggle())
  };

  // Getting search suggestion data...
  const getSuggestionData = async () => {
    try {
      const response = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchValue);
      const jsonData = await response.json();
      setSuggestionData(jsonData[1]);
      // updating cache
      dispatch(addCacheData({ [searchValue]: jsonData[1] }));
    } catch (err) { console.log(err) }
  };

  // Debounsing for search...
  useEffect(() => {

    const timer = setTimeout(() => {
      // Checking cache...
      if (searchValue && cachedSearchData[searchValue]) {
        setSuggestionData(cachedSearchData[searchValue]);
      } else {
        getSuggestionData()
      }

    }, 300);


    return () => clearTimeout(timer)
  }, [searchValue]);

  const searchSuggestionHandel = (str) => {
    navigate(str ? "/search?query=" + str : "")
  }


  return (
    <div className="grid grid-flow-col p-2 m-2 h-14 bg-white items-center bg-fixed top-0 left-0 w-full z-40 ">
      {/* Menu Button to toggel Sidebar and Logo */}
      <div className="flex col-span-1">
        <img
          className="h-6 cursor-pointer"
          src="https://www.svgrepo.com/show/506800/burger-menu.svg"
          alt="Menu"
          onClick={handelToggle}
        />

        <Link to={"/"}><img
          className="h-6 ml-3"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="Logo"
        /></Link>
      </div>

      {/* Searchbar  */}
      <div className="col-span-10 flex justify-center items-center text-center">
        <div className="w-2/3">

          {/* searchbar and button */}
          <div className="w-full h-full flex ">
            <input
              className="w-full h-full text-lg border rounded-l-full px-3 py-2"
              value={searchValue}
              onChange={(e) => { setSearchValue(e.target.value) }}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  navigate(searchValue ? "/search?query=" + searchValue : "")
                }
              }}
            />
            {/* Search Button */}
            <Link
              className="border rounded-r-full px-3 py-2 mr-5 bg-gray-200"
              to={searchValue ? "/search?query=" + searchValue : ""}>
              <img
                className="h-5"
                src="https://www.svgrepo.com/show/532551/search-alt-1.svg"
                alt="search" />
            </Link>

          </div>

          {/* Suggestions */}
          {!suggestionData.length ? "" : showSuggestions && (
            <div className="border bg-white absolute w-2/5 rounded-md mt-2 text-start">
              <ul className="py-3">
                {
                  suggestionData.map((item, index) =>
                    <li
                      className="flex cursor-pointer w-full  my-1 text-lg hover:bg-gray-200"
                      key={index}
                      onClick={() => {
                        searchSuggestionHandel(item)
                      }}
                    >
                      <img
                        src="https://www.svgrepo.com/show/522266/search.svg"
                        onClick={() => {
                          searchSuggestionHandel(item)
                        }}
                        alt=""
                        className="h-6 mx-4 hover:bg-gray-200 self-center"
                      />
                      {item}</li>
                  )
                }
              </ul>
            </div>)
          }

        </div>


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
