import { NavLink } from "react-router-dom";

const Menu = ({ menuData }) => {
    // This Component For Submenu
    const SubMenu = ({ submenu }) => {
        return (
            <ul className="sub-menu">
                {submenu.map((subM) => {
                    const { id, title, link } = subM;
                    return (
                        <li key={id}>
                            <NavLink to={link} title={title}>
                                {title}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        );
    };

    return (
        <nav>
            <ul>
                {menuData.map((mData) => {
                    const { id, title, link, submenu } = mData;
                    return (
                        <li key={id}>
                            <NavLink to={link} title={title}>
                                {title}

                                {submenu && <span className="dropdown-plus">+</span>}
                            </NavLink>

                            {submenu && <SubMenu submenu={submenu} />}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Menu;
