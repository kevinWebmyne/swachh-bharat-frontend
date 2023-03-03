import { Link } from 'react-router-dom'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';

import { Container, Row, Col, Card } from 'react-bootstrap'
const Footer = () => {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="callus_now">
                            <div className="row">
                                <div className="col-xl-2 col-lg-2 col-md-2">
                                    <img src="https://staging.webmynehost.com/swachh-bharat/images/phone.png" alt="Call-us-now" />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-5">
                                    <span>CALL US NOW!</span>
                                    <p>Test Content Test Content Test Content Test Content Test Content Test Content</p>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-5">
                                    <a href="tel:1234567895">1234567895</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="section-Footer">
                    <Row>
                        <Col className="section-Footer-1">
                            <p style={{ fontSize: 30 }}> ABOUT US </p>
                            <p>The campaign aims to achieve the vision of a 'Clean India' by 2nd October 2019. The Swachh Bharat Abhiyan is the most significant cleanliness campaign by the Government of India. </p>
                            <Link to={'/terms'} target='_blank'> <button className='section-9-2-1'>TERMS</button> </Link>
                            <Link to={'/privacy'}><button className='section-9-2-1'>PRIVACY POLICY</button></Link>
                        </Col>
                        <Col className="section-Footer-2" >
                            <span className='section-9-1-2'>
                                <RoomIcon style={{ color: '#a5ddbd', fontSize: 30, marginTop:70 }} />
                              
                                    <p className='section-9-1-2-address'>Under Secretary (SBM II) <br />
                                        12th Floor Paryavarn Bhawan, CGO Complex,<br />
                                        Lodhi Road,New Delhi - 110003.</p>
                          
                            </span>
                            <EmailIcon style={{ color: '#a5ddbd', fontSize: 30}} />
                            <span>
                                <p className='section-9-1-3-address'> info[at]webmyne[dot]com</p>
                            </span>
                            <span>
                              <Link to={'/donate'} target="_self">  <button className='section-9-1-4'>DONATE NOW</button>  </Link>
                            </span>
                        </Col>
                        <Col >
                        <span>
                        <img className='section-9-3-1' src="http://localhost:3001/uploads/swachh_bharart_logo2.png" alt="Swacch Bharat" />
                        <div className='section-9-3-2'>
                            <img src="https://staging.webmynehost.com/swachh-bharat/images/social-1.png" alt="facebook" /> 
                            <img  className='section-9-3-2-1'src="https://staging.webmynehost.com/swachh-bharat/images/social-3.png" alt="youtube" /> 
                            <img  className='section-9-3-2-1'src="https://staging.webmynehost.com/swachh-bharat/images/social-2.png" alt="rss" />
                            <img className='section-9-3-2-1' src="https://staging.webmynehost.com/swachh-bharat/images/social-4.png" alt="twitter" /> 
                            <img  className='section-9-3-2-1'src="https://staging.webmynehost.com/swachh-bharat/images/social-5.png" alt="google" /> 
                            <p className='section-9-3-3'>©2019 Swachh Bharat NGO.</p></div>
                    </span>
                
                        </Col>
                    </Row>
                </div>
            </div>
        </div>

    )

}


export default Footer;