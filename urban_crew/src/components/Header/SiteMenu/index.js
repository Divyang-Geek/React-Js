import { useState } from "react";
import SidebarMenu from "./SidebarMenu";

const SiteMenu = () => {
    const [show, setShow] = useState(false);

    const sidebarShow = () => {
        setShow(true);
    };
    return (
        <>
            <div className="site-menu">
                <div className="site-menu-btn-wp">
                    <button className="site-menu-btn" onClick={sidebarShow}>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <SidebarMenu show={show} setShow={setShow} />
            </div>
        </>
    );
};

export default SiteMenu;
