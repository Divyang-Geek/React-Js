import { useParams } from "react-router-dom";

const User2 = () => {
    let { slug } = useParams();

    return <div className="">User2 {slug}</div>;
};

export default User2;
