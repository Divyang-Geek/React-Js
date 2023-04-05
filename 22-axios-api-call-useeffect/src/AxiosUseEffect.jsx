import axios from "axios";
import { useEffect, useState } from "react";

const AxiosUseEffect = () => {
    const [num, setNum] = useState(null);
    const [iName, setIName] = useState(null);
    const [iMoves, setIMoves] = useState(null);

    useEffect(() => {
        const getPokeData = async () => {
            const apiUrl = `https://pokeapi.co/api/v2/pokemon/${num}`;
            const res = await axios.get(apiUrl);
            console.log(res);
            // console.log(res.data.name);
            setIName(res.data.name);
            console.log(res.data.moves);
            // console.log(res.data.moves);
            setIMoves(res.data.moves.length);

            // const singleItem = res.data.moves;

            // singleItem.map((val, index)=> {
            //     return console.log(val.move.name);
            // })
        };

        getPokeData();
    });

    return (
        <>
            <h1>
                Your Number is <span style={{ color: "red" }}> {num}</span>
            </h1>
            <h2>
                My Name is <span style={{ color: "red" }}> {iName}</span>
            </h2>
            <h2>
                I have <span style={{ color: "red" }}> {iMoves}</span> moves
            </h2>
            <select
                value={num}
                onChange={(e) => {
                    setNum(e.target.value);
                }}
            >
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </>
    );
};

export default AxiosUseEffect;
