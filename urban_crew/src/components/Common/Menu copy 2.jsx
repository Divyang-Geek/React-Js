import { NavLink } from "react-router-dom";

const Menu = ({ menuData }) => {
    // This Component For Submenu
    const SubMenu = ({ submenu }) => {
        return (
            <ul className="sub-menu">
                {submenu.map((subM, index) => {
                    const { id, title, link } = subM;
                    return (
                        <li key={id} style={{ "--uc-menu-li-delay": `${index * 100}ms` }}>
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
                    let html = `<a href=${link}>${title} <span className="dropdown-plus">+</span></a> `;
                    return mData?.submenu ? (
                        <li key={id} dangerouslySetInnerHTML={{ __html: html }}>
                        {submenu && <SubMenu submenu={submenu} />}
                        </li>
                    ) : (
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
