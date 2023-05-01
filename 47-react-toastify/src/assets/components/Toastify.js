import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toastify = () => {
    const loginEvent = () => {
        // toast("Login SuccessFul !");
        toast.success("Login SuccessFul", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        toast.error("Login Error", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };
    return (
        <>
            <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center text-center">
                <div className="form">
                    <h2>Welcome To Sign In Page</h2>
                    <Button variant="primary" onClick={loginEvent}>
                        Login
                    </Button>
                    <ToastContainer />
                </div>
            </div>
        </>
    );
};

export default Toastify;
