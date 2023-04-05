const SearchResult = ({ searchProp }) => {
    const imag = `https://api.lorem.space/image/${searchProp}?w=150&h=220`;

    return (
        <>
            <div className="">
                <div className="search_img">
                    <img src={imag} alt="img" />
                </div>
            </div>
        </>
    );
};

export default SearchResult;
