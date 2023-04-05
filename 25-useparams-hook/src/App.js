import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Service from "./component/Service";
import Contact from "./component/Contact";
import Error from "./component/Error";
import User from "./component/User";
import User2 from "./component/User2";
import User3 from "./component/User3";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/user" Component={User} />
                <Route path="/user/:slug" Component={User2} />
                <Route path="/user/:a/:b" Component={User3} />
                <Route path="/service" Component={Service} />
                <Route path="/contact" Component={Contact} />
                <Route path="*" Component={Error} />
            </Routes>
        </>
    );
}

export default App;
