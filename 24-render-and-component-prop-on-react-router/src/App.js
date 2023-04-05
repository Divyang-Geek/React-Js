import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Service from "./Service";

function App() {
    return (
        <>
            <Menu />
            <Routes>
                {/* <Route path="/" Component={Home} /> */}
                <Route path="/" Component={() => <Home pageName="Home" />} />
                <Route path="/service" render={() => <Service pageName="Service" />} />
                <Route path="/about" Component={About} />
            </Routes>
        </>
    );
}

export default App;
