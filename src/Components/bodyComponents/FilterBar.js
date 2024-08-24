// Filter bar in top of video container...

import FilterButton from "./FilterButton";
const buttonsArray = ["All", "Google", "Ideas", "News", "Live", "History", "Recently uploaded", "Watched", "Tech", "Bio"]

const FilterBar = () => {

    return (
        <div className="flex max-w-screen-lg overflow-y-auto">
            {
                buttonsArray.map((name, index) => <FilterButton key={index} name={name} />)
            }
        </div>
    );
};

export default FilterBar;