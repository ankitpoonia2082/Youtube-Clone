// Filter Button...

const FilterButton = ({ name }) => {

    return (
        <button
            className="bg-gray-100 line-clamp-1 rounded-xl mx-2 font-semibold px-3 py-2 text-sm"
        >{name}
        </button>
    );
};

export default FilterButton;