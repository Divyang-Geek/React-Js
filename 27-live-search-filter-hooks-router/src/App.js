import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/search" Component={Search} />
                <Route path="/contact" Component={Contact} />
            </Routes>
        </>
    );
}

export default App;
