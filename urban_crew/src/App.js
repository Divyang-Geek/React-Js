import { BrowserRouter, Route, Routes } from "react-router-dom";
import BodyLines from "./components/Common/BodyLines";
import Header from "./components/Header";
import Home from "./pages/Home/index";
import Footer from "./components/Footer";
import About from "./pages/About";

const App = () => {
    return (
        <>
            <BrowserRouter basename="/">
                <BodyLines />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default App;
