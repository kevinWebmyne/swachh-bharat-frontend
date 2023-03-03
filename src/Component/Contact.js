import Navbars from "./Navbar";
import PublicIcon from '@mui/icons-material/Public';
import { useEffect, useState } from "react";
import { Container} from 'react-bootstrap'
import Footer from './Footer'

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
const Contact = () => {

    const [name, SetName] = useState('');
    const [email, SetEmail] = useState('');
    const [subject, SetSubject] = useState('');
    const [message, SetMessage] = useState('');


    useEffect(() => {

    }, [])


    const Submit = async (e) => {

        e.preventDefault()

        // update by put request

        const data = {
            name: name,
            email: email,
            subject: subject,
            message: message
        }
        console.log(data);
        
        fetch("http://localhost:3001/api/noAuth/contact", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log(res);
            res.json().then((result) => {
                console.log(result);
            })
        })
    }

    return (
        <div>
            <div>
                <Navbars />
            </div>
            <div>
                <img className="responsive-image__image" alt='images' src={`https://staging.webmynehost.com/swachh-bharat/images/contact-banner.jpg`} />
            </div>

            <MDBContainer>
                <MDBRow>
                    <MDBCol md="8">
                        <div>
                            <Container style={{ backgroundColor: '#f0f0f0', marginTop: 40 }}>
                                <h1 className='text-center'  >CONTACT US</h1>
                                <hr />
                                <div>
                                    <div >

                                    </div>
                                </div>
                            </Container>

                        </div >
                        <div style={{ marginLeft: 20, marginRight: 20 }}>
                            <form class="row g-3 needs-validation" >
                                <div class="col-md-4">
                                    <label for="validationCustom01" class="form-label">Name</label>
                                    <input type="text" class="form-control" onChange={(e) => { SetName(e.target.value) }} required />
                                </div>
                                <div class="col-md-6">
                                    <label for="validationCustomUsername" class="form-label">Username</label>
                                    <div class="input-group has-validation">
                                        <div class="input-group-text" id="inputGroupPrepend">@</div>
                                        <input type="text" onChange={(e) => { SetEmail(e.target.value) }} class="form-control" aria-describedby="inputGroupPrepend" required />

                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label for="validationCustom04" class="form-label">Subject</label>
                                    <select class="form-select" onChange={(e) => { SetSubject(e.target.value) }} required>
                                        <option selected disabled value="">Choose...</option>
                                        <option >General Customer Service</option>
                                        <option >Suggestions</option>
                                        <option>Product Support</option>
                                    </select>

                                </div>

                                <div class="col-md-10">
                                    <label for="validationCustom03" class="form-label">Message</label>
                                    <input type="text" onChange={(e) => { SetMessage(e.target.value) }} class="form-control" required />

                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary"  onClick={Submit}  type="submit">SEND MESSAEG</button>
                                </div>
                            </form>
                        </div>

                    </MDBCol>
                    <MDBCol md="4">
                        <div className="section-contact">
                            <PublicIcon style={{ marginTop: 5 }} />
                            <h2>Office</h2>
                        </div>
                        <hr />
                        <div>
                            <address>
                                <strong>Webmyne Systems Pvt. Ltd.</strong>
                                <br />702, Ivory Terrace, Opp. Circuit House
                                <br />R.C. Dutt Road, Vadodara-07
                                <br />Gujarat - India.
                                <br /><abbr title="Phone">P:
                                </abbr>+ 91 (265)233-6907
                            </address>
                            <address>
                                <strong>&nbsp;Contact us</strong>
                                <br /><p>help[at]webmyne[dot]com</p>
                            </address>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <div>
                <div className="row">
                    <div className="col-12">
                        <div className="map_div">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1845.5925224022792!2d73.17475275568911!3d22.308840421927247!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa7b5274fae1b51d5!2sWebmyne+Systems+Pvt.+Ltd.!5e0!3m2!1sen!2sin!4v1432561667772" width="100%" height="100%" frameborder="0">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Contact;