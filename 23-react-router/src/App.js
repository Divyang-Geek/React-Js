import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import PageContent from "./PageContent";

function App() {
    return (
        <>
            <PageContent>
                <Navbar />
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/about" Component={About} />
                    <Route path="/contact" Component={Contact} />
                    <Route path="*" Component={Error} />
                </Routes>
            </PageContent>
        </>
    );
}

export default App;
