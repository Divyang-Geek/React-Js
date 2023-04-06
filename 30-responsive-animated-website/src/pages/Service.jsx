import Card from "../components/Card";
import ServicesData from "../components/ServicesData";

const Service = () => {
    return (
        <>
            <div className="service_page py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="mb-5 text-center">Our Services</h1>
                        </div>
                    </div>
                    <div className="row g-4">
                        {ServicesData.map((data, index) => {
                            return (
                                <div key={index} className="col-lg-4">
                                    <Card {...data} imgHeight="300px" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;
