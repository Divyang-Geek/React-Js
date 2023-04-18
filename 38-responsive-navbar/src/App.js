import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home pageName={"Home"} />}></Route>
                <Route path="/about" element={<About pageName={"About"} />}></Route>
                <Route path="/service" element={<Service pageName={"Service"} />}></Route>
                <Route path="/contact" element={<Contact pageName={"Contact"} />}></Route>
            </Routes>
        </>
    );
}

export default App;
