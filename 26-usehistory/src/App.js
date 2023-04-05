import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Menu from "./component/Menu";
import User from "./component/User";
import User2 from "./component/User2";

function App() {
    return (
        <>
            <Menu />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route exact path="/user" component={User} />
                <Route path="/user/:slug" component={User2} />
            </Switch>
        </>
    );
}

export default App;
