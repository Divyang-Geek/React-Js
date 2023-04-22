import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import WeatherResultCard from "./WeatherResultCard";

const WeatherApp = () => {
    const [search, setSearch] = useState("surat");

    const [weatherInfo, setWeatherInfo] = useState({});

    const getWeatherInfo = async () => {
        try {
            const ApiId = "2413777e1d18091f6233b5106d6c71b2";
            const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${ApiId}`;
            // console.log(ApiUrl);

            // Fetch Api
            const resp = await fetch(ApiUrl);
            const data = await resp.json();
            // console.log(data);

            // Data Destructuring
            const { name } = data;
            const { temp, humidity, pressure } = data.main;
            const { speed } = data.wind;
            const { main: weatherMood } = data.weather[0];
            const { country, sunset } = data.sys;

            // Set Destructuring Data In Object
            const myWeatherInfo = {
                name,
                temp,
                humidity,
                pressure,
                speed,
                weatherMood,
                country,
                sunset,
            };

            // Add New Object Data In State
            setWeatherInfo(myWeatherInfo);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getWeatherInfo();
    }, []);

    return (
        <>
            <div className="weather_app py-5 bg-dark min-vh-100">
                <Container>
                    <Row>
                        <Col lg={6} className="mx-auto">
                            <div className="weather_box">
                                <div className="sec_title text-center mb-5">
                                    <h1 className="text-white">Weather App</h1>
                                </div>
                                <div className="weather_search mb-4">
                                    <Stack direction="horizontal" gap={2}>
                                        <Form.Control size="lg" type="search" placeholder="Search City" value={search} onChange={(e) => setSearch(e.target.value)} />
                                        <Button variant="primary" size="lg" onClick={getWeatherInfo}>
                                            <FiSearch />
                                        </Button>
                                    </Stack>
                                </div>
                                <WeatherResultCard {...weatherInfo} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default WeatherApp;
