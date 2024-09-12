// Filter bar in top of video container...
import { useRef } from 'react';
import { Link } from "react-router-dom";
import FilterButton from "./FilterButton";
const buttonsArray = ["All", "Google", "Ideas", "News", "Apple", "Samsung", "EV", "Sidhu", "History", "live", "Watched", "Tech", "Bio", "MKBHD", "D2D", "Zolotech", "React", "JavaScript", "Node"]

const FilterBar = () => {

    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className="flex mt-5 mx-2 justify-between items-center">
            <button
                className="py-1 px-3 mx-2 rounded-full border text-lg"
                onClick={scrollLeft}
            >❮</button>

            <div className="flex overflow-y-auto w-screen" ref={scrollContainerRef}>
                {
                    buttonsArray.map((name, index) =>
                        <Link
                            to={"/search?query=" + name}
                            key={index}>
                            <FilterButton name={name} />
                        </Link>)
                }
            </div>
            <button
                className="py-1 px-3 mx-2 rounded-full border text-lg"
                onClick={scrollRight}
            >❯
            </button>
        </div>
    );
};

export default FilterBar;