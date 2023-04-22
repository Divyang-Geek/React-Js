import { useEffect, useState } from "react";
import { Col, Row, Stack } from "react-bootstrap";
import { WiDaySunny, WiHumidity, WiStrongWind, WiRain, WiMoonset, WiDayHaze } from "react-icons/wi";

const WeatherResultCard = ({ name, temp, humidity, pressure, speed, weatherMood, country, sunset }) => {
    const [weather, setWeather] = useState();

    // convert second to time
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;

    useEffect(() => {
        // if (weatherMood) {
            switch (weatherMood) {
                case "Clear":
                    setWeather(<WiDaySunny />);
                    break;
                case "Clouds":
                    setWeather(<WiMoonset />);
                    break;
                case "Haze":
                    setWeather(<WiDayHaze />);
                    break;

                default:
                    setWeather(<WiDaySunny />);
                    break;
            }
        // }
    }, [weatherMood]);

    return (
        <>
            <div className="weather_result_card text-white bg-secondary rounded-2 p-4">
                <div className="weather_card_icon text-center mb-3">
                    {/* <WiDaySunny /> */}
                    {weather}
                </div>
                <div className="weather_card_info mb-3">
                    <Stack direction="horizontal" gap={2}>
                        <Stack direction="horizontal" gap={2} className="flex-grow-1 temp_box">
                            <h3>{temp} &deg;</h3>
                            <div className="weather_card_desc">
                                <h5>{weatherMood}</h5>
                                <h4>
                                    {name}, {country}
                                </h4>
                            </div>
                        </Stack>
                        <Stack direction="horizontal" gap={2} className="date_box">
                            <p className="mb-0 text-end">{new Date().toLocaleString()}</p>
                        </Stack>
                    </Stack>
                </div>
                <div className="weather_card_info_extra">
                    <Row>
                        <Col lg={3}>
                            <Stack direction="horizontal" gap={3}>
                                <div className="weather_result_extra_icon">
                                    <WiDaySunny />
                                </div>
                                <Stack gap={1}>
                                    <span>{timeStr}</span>
                                    <span>Sunset</span>
                                </Stack>
                            </Stack>
                        </Col>
                        <Col lg={3}>
                            <Stack direction="horizontal" gap={3}>
                                <div className="weather_result_extra_icon">
                                    <WiHumidity />
                                </div>
                                <Stack gap={1}>
                                    <span>{humidity}</span>
                                    <span>Humidity</span>
                                </Stack>
                            </Stack>
                        </Col>
                        <Col lg={3}>
                            <Stack direction="horizontal" gap={3}>
                                <div className="weather_result_extra_icon">
                                    <WiRain />
                                </div>
                                <Stack gap={1}>
                                    <span>{pressure}</span>
                                    <span>Pressure</span>
                                </Stack>
                            </Stack>
                        </Col>
                        <Col lg={3}>
                            <Stack direction="horizontal" gap={3}>
                                <div className="weather_result_extra_icon">
                                    <WiStrongWind />
                                </div>
                                <Stack gap={1}>
                                    <span>{speed}</span>
                                    <span>Speed</span>
                                </Stack>
                            </Stack>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default WeatherResultCard;
