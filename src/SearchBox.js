import useFetch from "./useFetch";

const SearchBox = () => {
    const { onSearchChange } = useFetch("http://localhost:8000/blogs/")
    return (
        <div className="search-box">
            <div>
                <input
                type="search"
                placeholder="Search..."
                onChange={onSearchChange}
                     />
            </div>
        </div>
    );
}

export default SearchBox;