import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

const User = () => {
    const { slug } = useParams();
    const location = useLocation();
    const locPath = location.pathname;
    const history = useHistory();

    return (
        <>
            <div className="">
                <h3>User Single</h3>
                <p>{slug}</p>
                <p>{locPath}</p>
                {locPath === "/user/dk" ? <button>Clickme</button> : null}
                <button className="" onClick={() => history.goBack()}>
                    Goto Back
                </button>
                <button className="" onClick={() => history.goForward()}>
                    Goto Forward
                </button>
                <button className="" onClick={() => history.push("/")}>
                    Goto Home
                </button>
            </div>
        </>
    );
};

export default User;
