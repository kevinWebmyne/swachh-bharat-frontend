import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import Footer from "./Footer";
import Navbars from "./Navbar";

function Home2() {
  const [items, setItems] = useState([]);
  const [cmsImage, setCmsImage] = useState([]);
  const [impact, setImpact] = useState([]);
  const [cmsvision, setCmsvision] = useState([]);
  const [volunteer, setVolunteer] = useState([]);
  const [reach, setReach] = useState([]);
  const [volunteerWorks, setVolunteerWorks] = useState([]);
  const [together, setTogether] = useState([]);

  console.log(cmsImage);

  const getSliderData = async () => {
    const { data } = await axios.get(
      `http://localhost:3001/api/noAuth/slider/?page=1&size=100`
    );
    let product = data.data;
    console.log(product);
    const results = product.filter((curData) => {
      return curData.is_verified === true;
    });
    console.log(results);
    setItems(results);
  };

  const getCmsBlockData = async () => {
    await fetch("http://localhost:3001/api/noAuth/cms/?page=1&size=400").then(
      (res) => {
        res.json().then((result) => {
          if (result) {
            const results = result.data.filter((curData) => {
              return curData.identifier === "ABOUT_OUR_FOUNDATION";
            });
            console.log(results);
            setCmsImage(results);
          }
        });
      }
    );
  };

  const getImpactData = async () => {
    await fetch(
      "http://localhost:3001/api/noAuth/impact/?page=1&size=100"
    ).then((res) => {
      res.json().then((result) => {
        if (result) {
          const results = result.data.filter((curData) => {
            return curData.status === "Active";
          });
          console.log(results);
          setImpact(results);
        }
      });
    });
  };

  const getCmsVisionData = async () => {
    await fetch("http://localhost:3001/api/noAuth/cms/?page=1&size=400").then(
      (res) => {
        res.json().then((result) => {
          if (result) {
            const results = result.data.filter((curData) => {
              return curData.identifier === "VISION_ &_ MISSION";
            });
            console.log(results);
            setCmsvision(results);
          }
        });
      }
    );
  };

  const getVolunteerData = async () => {
    await fetch(
      "http://localhost:3001/api/noAuth/volunteerData/?page=1&size=3"
    ).then((res) => {
      res.json().then((result) => {
        if (result) {
          const results = result.data.filter((curData) => {
            return curData.status === "Active";
          });
          console.log(results);
          setVolunteer(results);
        }
      });
    });
  };

  const getReachData = async () => {
    await fetch("http://localhost:3001/api/noAuth/cms/?page=1&size=400").then(
      (res) => {
        res.json().then((result) => {
          if (result) {
            const results = result.data.filter((curData) => {
              return curData.identifier === "OUR REACH";
            });
            console.log(results);
            setReach(results);
          }
        });
      }
    );
  };

  const getVolunteerWorkData = async () => {
    await fetch("http://localhost:3001/api/noAuth/cms/?page=1&size=400").then(
      (res) => {
        res.json().then((result) => {
          if (result) {
            const results = result.data.filter((curData) => {
              return curData.identifier === "VOLUNTEERING WORKS?";
            });
            console.log(results);
            setVolunteerWorks(results);
          }
        });
      }
    );
  };

  const getTogetherData = async () => {
    await fetch("http://localhost:3001/api/noAuth/cms/?page=1&size=400").then(
      (res) => {
        res.json().then((result) => {
          if (result) {
            const results = result.data.filter((curData) => {
              return curData.identifier === "WORKING TOGETHER";
            });
            console.log(results);
            setTogether(results);
          }
        });
      }
    );
  };

  useEffect(() => {
    getSliderData();
    getCmsBlockData();
    getImpactData();
    getCmsVisionData();
    getVolunteerData();
    getReachData();
    getVolunteerWorkData();
    getTogetherData();
  }, []);

  return (
    <div>
      <div>
        <Navbars />
      </div>
      <div style={{ position: "relative" }}>
        <Carousel fade>
          {items.map((product, t) => (
            <Carousel.Item>
              <span key={t}>
                <img
                  className="responsive-image__image"
                  alt="images"
                  src={`http://localhost:3001/uploads/${product.image}`}
                  height={500}
                  width={1370}
                />
                <Carousel.Caption>
                  {product.sliderTitle}
                  {product.description}
                </Carousel.Caption>
              </span>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div>
        <div className="section-2">
          <Row>
            <Col className="section-2-1">
              {reach.map((product, t) => (
                <span key={t}>
                  <span className="section-2-1-1">
                    {product.title} <hr className="reach-hr" />
                  </span>
                  <div
                    className="section-2-1-2"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </span>
              ))}
            </Col>
            <Col className="section-2-2">
              {volunteerWorks.map((product, t) => (
                <span key={t}>
                  <span className="section-2-2-1">{product.title}</span>
                  <div
                    className="section-2-2-2"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </span>
              ))}
            </Col>
            <Col className="section-2-3">
              {together.map((product, t) => (
                <span key={t}>
                  <span className="section-2-1-1">
                    {product.title} <hr className="together-hr" />
                  </span>
                  <div
                    className="section-2-3-1"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </span>
              ))}
            </Col>
          </Row>
        </div>
      </div>
      <div>
        <span>
          <span>
            <Row>
              <Col className="section-3-1">
                {cmsImage.map((product, t) => (
                  <span key={t}>
                    <span className="section-3-1">
                      <div className="section-3-1-1">
                        <span>
                          <h1> {product.title} </h1>
                        </span>
                        <span className="section-3-1-description">
                          {product.description}
                        </span>
                      </div>
                    </span>
                  </span>
                ))}
              </Col>
              <Col className="section-3-2">
                {cmsImage.map((product, t) => (
                  <span key={t}>
                    <span className="section-3-1-image">
                      <img
                        alt="images"
                        src={`http://localhost:3001/uploads/${product.image}`}
                        height={300}
                        width={400}
                      />
                    </span>
                  </span>
                ))}
              </Col>
            </Row>
          </span>
        </span>
      </div>

      <div className="section-4">
        <span className="section-4-1">
          <h1>Our Impacts</h1>
        </span>
        <span>
          {impact.map((product, t) => (
            <span key={t} className="section-4-1-image">
              <span>
                <img
                  alt="images"
                  src={`http://localhost:3001/uploads/${product.image}`}
                  height={300}
                  width={224}
                />
              </span>
            </span>
          ))}
        </span>
      </div>

      <div>
        <span>
          <span>
            <Row>
              <Col className="section-3-1">
                {cmsvision.map((product, t) => (
                  <span key={t}>
                    <span className="section-3-1">
                      <div className="section-3-1-1">
                        <span>
                          <h1> {product.title} </h1>
                        </span>
                        <span className="section-3-1-description">
                          {product.description}
                        </span>
                      </div>
                    </span>
                  </span>
                ))}
              </Col>
              <Col className="section-3-2">
                {cmsvision.map((product, t) => (
                  <span key={t}>
                    <span className="section-3-1-image">
                      <img
                        alt="images"
                        src={`http://localhost:3001/uploads/${product.image}`}
                        height={300}
                        width={400}
                      />
                    </span>
                  </span>
                ))}
              </Col>
            </Row>
          </span>
        </span>
      </div>
      <div>
        <span className="section-6">
          <Container className="justify-content-center p-2">
            <h1 className="text-center">Volunteer</h1>
            <hr />
            <Row>
              {volunteer.map((product) => {
                return (
                  <Col md={6} lg={4} sm={12} key={product._id}>
                    <>
                      <Card
                        className="shadow-lg m-2 p-3 rounded"
                        style={{ width: "18rem" }}
                      >
                        <Card.Img
                          src={`http://localhost:3001/uploads/${product.image}`}
                          height={250}
                          width={500}
                        />
                        <Card.Body>
                          <Card.Title>{product.volunteerTitle}</Card.Title>
                          <Card.Title>{product.description}</Card.Title>
                        </Card.Body>
                      </Card>
                    </>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </span>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home2;
