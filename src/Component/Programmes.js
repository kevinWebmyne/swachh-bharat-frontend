import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap'
import Footer from "./Footer";

const Programmes = () => {

    const [volunteer, setVolunteer] = useState([]);

    const getVolunteerData = async () => {
        await fetch("http://localhost:3001/api/noAuth/programmes/?page=1&size=500").then((res) => {
            res.json().then((result) => {
                if (result) {
                    const results = result.data.filter((curData) => {
                        return curData.status === 'Active';
                    })
                    console.log(results);
                    setVolunteer(results)
                }
            })
        })
    }
    useEffect(() => {
        getVolunteerData()
    }, [])
        return (
        <div>
            <div>
            <div>
                    <Navbar />
                </div>
                <div className="slider-image">
                    <img className="responsive-image__image" alt='images' src={`https://staging.webmynehost.com/swachh-bharat/images/PROGRAMMES-banner.jpg`} height={500} width={1370} />
                </div>
               
            </div>

            <div >
                    <Container className="justify-content-center p-2">
                        <Row>
                            {
                                volunteer.map(product => {
                                    return <Col md={6} lg={4} sm={12} key={product._id}>
                                        <>
                                            <Card className='shadow-lg m-2 p-3 rounded' style={{ width: '18rem' }}>
                                                <Card.Img src={`http://localhost:3001/uploads/${product.image}`} height={250} width={500} />
                                                <Card.Body>
                                                <Card.Title> {product.city}</Card.Title>
                                                    <Card.Title> Volunteers - {product.volunteers}</Card.Title>
                                                    <Card.Title> Date - {product.date}</Card.Title>
                                                </Card.Body>
                                            </Card>
                                        </>
                                    </Col>
                                })
                            }
                        </Row>
                    </Container>
                </div>
                <div>
                    <Footer />
                </div>
        </div>
    )
}

export default Programmes;