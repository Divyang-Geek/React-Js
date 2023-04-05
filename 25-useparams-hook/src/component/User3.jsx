import { useLocation, useParams, useNavigate } from "react-router-dom";

// const User3 = () => {
//     let { slug, slug2 } = useParams();

//     return <div className="">User3 {slug} {slug2}</div>;
// };

// export default User3;

// ! useLocation

// const User3 = () => {
//     let { a, b } = useParams();
//     const location = useLocation();
//     const locPath = location.pathname;

//     return (
//         <>
//             <div className="">
//                 <h2>
//                     {a} {b}
//                 </h2>
//                 <p>location: {locPath}</p>
//                 {locPath === `/user/dk/geek` ? <button onClick={() => alert(`You are in ${locPath}`)}>Click Me</button> : null}
//             </div>
//         </>
//     );
// };

// export default User3;

// ! useNavigate

const User3 = () => {
    let { a, b } = useParams();
    const location = useLocation();
    const locPath = location.pathname;
    const navigate = useNavigate();

    return (
        <>
            <div className="">
                <h2>
                    {a} {b}
                </h2>
                <p>location: {locPath}</p>
                {locPath === `/user/dk/geek` ? <button onClick={() => navigate("/contact")}>Go To Contact</button> : null}
                <button onClick={() => navigate(-1)}>Go back</button>
                <button onClick={() => navigate(1)}>Go forward</button>
            </div>
        </>
    );
};

export default User3;
