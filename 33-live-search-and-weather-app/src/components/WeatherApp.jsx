// import { Badge, Stack } from "react-bootstrap";
import { useEffect, useState } from "react";
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
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Surat");
    useEffect(() => {
        const fetchApi = async () => {
            const apiKey = "2413777e1d18091f6233b5106d6c71b2";
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`;

            const response = await fetch(apiUrl);
            // console.log(response);

            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main);
        };

        fetchApi();
    }, [search]);

    const formSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <section className="weather_sec vh-100 d-flex align-items-center">
                <Container>
                    <Row>
                        <Col lg={5} xs={12} className="mx-auto">
                            <div className="weather_box p-5 bg-primary text-white rounded-4">
                                <h2 className="text-center fw-bold mb-4">Weather App</h2>
                                <Form onSubmit={formSubmit}>
                                    <Form.Group className="mb-3" controlId="formSearch">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search here..."
                                            size="lg"
                                            className="mb-2"
                                            onChange={(e) => {
                                                // console.log(e.target.value);
                                                setSearch(e.target.value);
                                            }}
                                            value={search}
                                        />
                                        <Form.Text className="text-white">You Can Find Here City Name.</Form.Text>
                                    </Form.Group>
                                </Form>
                                <div className="formResult text-center">
                                    {!city ? (
                                        <p className="m-0 text-bg-danger p-2 rounded-2">No Data Found</p>
                                    ) : (
                                        <>
                                            <div className="formResultTop my-4">
                                                <h1 className="m-0">
                                                    <FaStreetView className="me-3" />
                                                    {search}
                                                </h1>
                                            </div>
                                            <div className="formResultMiddle my-4">
                                                <h3 className="m-0">{city.temp}</h3>
                                            </div>
                                            <div className="formResultBottom mt-4">
                                                <p className="m-0">
                                                    Min: {city.temp_min} Cel | Max: {city.temp_max} Cel
                                                </p>
                                            </div>
                                        </>
                                    )}
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
