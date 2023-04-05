import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/contact" Component={Contact} />
                {/* <Route Component={NotFound} /> */}
                {/* <Route path="*" Component={NotFound} element={<Navigate to="/" />} /> */}
                {/* <Route path="*" element={<Navigate to="/about" />} /> */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
}

export default App;
