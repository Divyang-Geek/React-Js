import { useState } from "react";
import SearchResult from "./SearchResult";

const Search = () => {
    const [search, setSearch] = useState("");

    const searchEve = (e) => {
        setSearch(e.target.value);
    };

    return (
        <>
            <div className="search_page">
                <div className="search_form">
                    <input type="text" placeholder="Search Here..." onChange={searchEve} value={search} />
                </div>
                <div className="search_result">{search === "" ? null : <SearchResult searchProp={search} />}</div>
            </div>
        </>
    );
};

export default Search;
