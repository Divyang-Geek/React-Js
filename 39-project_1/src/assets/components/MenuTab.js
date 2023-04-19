const MenuTab = ({ filterItem, menuTabItem }) => {
    return (
        <>
            <div className="menu_tab">
                <ul>
                    {menuTabItem.map((uCat, index) => {
                        return (
                            <li key={index} onClick={() => filterItem(uCat)}>
                                {uCat}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default MenuTab;
