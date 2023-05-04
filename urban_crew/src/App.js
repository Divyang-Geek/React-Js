import { BrowserRouter } from "react-router-dom";
import BodyLines from "./components/Common/BodyLines";
import Header from "./components/Header";

const App = () => {
    return (
        <>
            <BrowserRouter basename="/urban-crew">
                <BodyLines />
                <Header />
            </BrowserRouter>
        </>
    );
};

export default App;
