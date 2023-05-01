import { Button, Card, Col, Stack } from "react-bootstrap";

const UserCard = ({ elem }) => {
    console.log(elem);
    const { avatar_url: avatar_img, login: name, url, followers_url, following_url } = elem;
    return (
        <>
            <Col lg={4}>
                <Card>
                    <Card.Img variant="top" src={avatar_img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                        <Button variant="primary" href={url} target="_blank">Go To Single Page</Button>
                        <Stack gap={2}>
                            <Card.Text>Follower {followers_url.length}</Card.Text>
                            <Card.Text>Following {following_url.length}</Card.Text>
                        </Stack>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default UserCard;
