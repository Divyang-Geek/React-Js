import { BrowserRouter, Route, Routes } from "react-router-dom";
import BodyLines from "./components/Common/BodyLines";
import Header from "./components/Header";
import Home from "./pages/Home/index";

const App = () => {
    return (
        <>
            <BrowserRouter basename="/urban-crew">
                <BodyLines />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
