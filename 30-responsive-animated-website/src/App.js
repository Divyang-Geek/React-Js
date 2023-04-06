import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Header from "./components/Header";

function App() {
    return (
        <>
            <Header />
            <Routes>
                {/* Pages */}
                <Route path={"/"} element={<Home />} />
                <Route path={"/about"} element={<About />} />
                <Route path={"/service"} element={<Service />} />
                <Route path={"/contact"} element={<Contact />} />

                {/* If the Page Doesn't Exist, That Time It Will Redirect To the Home Page */}
                <Route path={"*"} element={<Navigate to={"/"} />} />
            </Routes>
        </>
    );
}

export default App;
