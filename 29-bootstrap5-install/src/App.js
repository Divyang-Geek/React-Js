import Header from "./component/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Route, Routes } from "react-router-dom";
import Card from "./component/Card";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/card" element={<Card />} />
            </Routes>
        </>
    );
}

export default App;
