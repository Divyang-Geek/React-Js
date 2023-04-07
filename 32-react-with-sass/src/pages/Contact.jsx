import { useState } from "react";

const Contact = () => {
    const [inpData, setInpData] = useState({
        fullName: "",
        phone: "",
        email: "",
        message: "",
    });

    const [show, setShow] = useState(false);

    const inpEve = (e) => {
        const { name, value } = e.target;

        setInpData((prevVal) => {
            return {
                ...prevVal,
                [name]: value,
            };
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        setShow(true);
    };

    return (
        <>
            <div className="contact_section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="text-center mb-5">Contact Us</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="contact_form">
                                <form onSubmit={formSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Full Name</label>
                                        <input type="text" className="form-control" name="fullName" value={inpData.fullName} onChange={inpEve} placeholder="Enter Your Name" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Phone</label>
                                        <input type="phone" className="form-control" name="phone" value={inpData.phone} onChange={inpEve} placeholder="Enter Your Mobile" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" name="email" value={inpData.email} onChange={inpEve} placeholder="Enter Your Email" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Message</label>
                                        <textarea className="form-control" rows="3" name="message" value={inpData.message} onChange={inpEve} placeholder="Enter Your Message" />
                                    </div>
                                    <div>
                                        <button className="btn btn-dark">Submit</button>
                                    </div>
                                </form>
                                {show ? (
                                    <div className="form_result" id="form_submit">
                                        {inpData.fullName} <br />
                                        {inpData.phone} <br /> {inpData.email} <br /> {inpData.message}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
