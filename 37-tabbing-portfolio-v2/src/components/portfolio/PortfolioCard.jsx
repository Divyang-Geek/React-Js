import { Button, Card, Stack } from "react-bootstrap";

const PortfolioCard = ({ pImage, pName, pPrice, pDescription }) => {
    return (
        <>
            <Card>
                <Card.Img variant="top" src={pImage} alt={pName} />
                <Card.Body>
                    <Card.Title as="h3">{pName}</Card.Title>
                    <Card.Text>{pDescription}</Card.Text>
                    <Stack direction="horizontal" gap={3} className="justify-content-between align-items-center">
                        <h5 className="m-0">{pPrice}</h5>
                        <Button variant="primary" href="http://google.com">
                            Order Now
                        </Button>
                    </Stack>
                </Card.Body>
            </Card>
        </>
    );
};

export default PortfolioCard;
