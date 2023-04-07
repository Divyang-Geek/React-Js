// import { Badge, Stack } from "react-bootstrap";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FaStreetView } from "react-icons/fa";

// ! 1 Testing

// const WeatherApp = () => {
//     return (
//         <>
//             <div className="">
//                 <Button variant="info">Primary</Button>
//                 <Stack direction="horizontal" gap={2}>
//                     <Button as="a" variant="primary">
//                         Button as link
//                     </Button>
//                     <Button as="a" variant="success">
//                         Button as link
//                     </Button>
//                 </Stack>
//                 <Badge bg="secondary" as="button">
//                     New
//                 </Badge>
//             </div>
//         </>
//     );
// };

// export default WeatherApp;

// ! 2

const WeatherApp = () => {
    return (
        <>
            <section className="weather_sec vh-100 d-flex align-items-center">
                <Container>
                    <Row>
                        <Col lg={5} xs={12} className="mx-auto">
                            <div className="weather_box p-5 bg-primary text-white rounded-4">
                                <h2 className="text-center fw-bold mb-4">Weather App</h2>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formSearch">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search here..."
                                            size="lg"
                                            className="mb-2"
                                            onChange={(e) => {
                                                // e.target.value
                                                // console.log(e.target.value)
                                            }}
                                        />
                                        <Form.Text className="text-white">You Can Find Here City Name.</Form.Text>
                                    </Form.Group>
                                </Form>
                                <div className="formResult">
                                    <FaStreetView />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default WeatherApp;
