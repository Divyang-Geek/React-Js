import { Col, Container, Row } from "react-bootstrap";
import SecTitle from "../../../components/Common/SecTitle";
import Button from "../../../components/Common/Button";
import Lines from "../../../components/Common/Lines";
import { Link } from "react-router-dom";
import BlogData from "./BlogData";

const Blog = () => {
    return (
        <>
            <section className="main-blog section">
                <div className="sec-wp">
                    <Container>
                        <Row>
                            <Col lg={8}>
                                <SecTitle
                                    subTitle={{
                                        first: "Our",
                                        second: "Articles",
                                    }}
                                    className="mb-80 text-center text-lg-start"
                                    h2Class="yellow-span"
                                >
                                    Everything You <span>Need</span> To <span>Know</span> About us
                                </SecTitle>
                            </Col>
                            <Col lg={4}>
                                <div className="sec-title-btn">
                                    <Button text="Read More" url="/blog" />
                                </div>
                            </Col>
                        </Row>
                        <div className="blog-row">
                            <Row className="g-xl-5">
                                {BlogData.map((data) => {
                                    const { id, title, meta, category, image } = data;
                                    const { author, date } = meta;
                                    return (
                                        <Col lg={4} key={id}>
                                            <Lines className="blog-box">
                                                <div className="blog-box-inner">
                                                    <div className="blog-box-meta">
                                                        <span className="blog-box-author">{author}</span>
                                                        <span className="blog-box-date">
                                                            <Link>{date}</Link>
                                                        </span>
                                                    </div>
                                                    <div className="blog-box-img">
                                                        <img src={image} alt={title} />
                                                    </div>
                                                    <div className="blog-box-content">
                                                        <span className="blog-box-category">
                                                            {category.map((data, index) => {
                                                                return <span key={index}>{data + (index >= 0 ? "," : "")}</span>;
                                                            })}
                                                        </span>
                                                        <h4 className="h4-title">
                                                            <Link to="/blog-detail">{title}</Link>
                                                        </h4>
                                                        <Link to="/blog-detail" className="bottom-line-link">
                                                            Load More
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Lines>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    );
};

export default Blog;
