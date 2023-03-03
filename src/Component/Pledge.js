import Navbars from "./Navbar";
import { Container} from 'react-bootstrap'
import { useEffect, useState } from "react";
import Footer from "./Footer";
const Pledge = () => {
    const [dropState, setDropState] = useState([]);
    const [name, SetName] = useState('');
    const [email, SetEmail] = useState('');
    const [phone, SetPhone] = useState('');
    const [city, SetCity] = useState('');
    const [state, SetState] = useState('');
    const [message, SetMessage] = useState('');

    const getStateData = async () => {
        await fetch("http://localhost:3001/api/noAuth/state/?page=1&size=100").then((res) => {
            res.json().then((result) => {
                if (result) {
                    const results = result.data.filter((curData) => {
                        return curData.is_verified === true;
                    })
                    console.log(results);
                    setDropState(results)
                }
            })
        })
    }

    useEffect(() => {
        getStateData()
    }, [])


    const Submit = async (e) => {

        e.preventDefault()

        // update by put request

        const data = {
            name: name,
            email: email,
            mobile: phone,
            city: city,
            state: state,
            message: message
        }

        fetch("http://localhost:3001/api/noAuth/pledge/", {
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
                <img className="responsive-image__image" alt='images' src={`https://staging.webmynehost.com/swachh-bharat/images/Pledge-banner.jpg`} />
            </div>
            <div>
                <Container style={{ backgroundColor: '#f0f0f0', marginTop: 40 }}>
                    <h1 className='text-center'  >TAKE A PLEDGE</h1>
                    <hr />
                    <div>
                        <div >

                        </div>
                    </div>
                </Container>

            </div >
            <div style={{ marginLeft: 20 , marginRight:20}}>
                <form class="row g-3 needs-validation" >
                    <div class="col-md-4">
                        <label for="validationCustom01" class="form-label">Name</label>
                        <input type="text" class="form-control" onChange={(e) => { SetName(e.target.value) }} required />

                    </div>
                    <div class="col-md-4">
                        <label for="validationCustomUsername" class="form-label">Email</label>
                        <div class="input-group has-validation">
                            <div class="input-group-text" id="inputGroupPrepend">@</div>
                            <input type="text" onChange={(e) => { SetEmail(e.target.value) }} class="form-control" aria-describedby="inputGroupPrepend" required />

                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustom01" class="form-label">Phone</label>
                        <input type="number" onChange={(e) => { SetPhone(e.target.value) }} class="form-control" required />

                    </div>
                    <div class="col-md-6">
                        <label for="validationCustom03" class="form-label">City</label>
                        <input type="text" onChange={(e) => { SetCity(e.target.value) }} class="form-control" required />

                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom04" class="form-label">State</label>
                        <select class="form-select" onChange={(e) => { SetState(e.target.value) }} required>
                            <option selected disabled value="">Choose...</option>

                            {
                                dropState.map(product => (
                                    <option>
                                        {product.stateTitle}</option>
                                ))
                            }
                        </select>

                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom05" class="form-label">Pincode</label>
                        <input type="Number" class="form-control" required />

                    </div>
                    <div class="col-md-6">
                        <label for="validationCustom03" class="form-label">Message</label>
                        <input type="text" onChange={(e) => { SetMessage(e.target.value) }} class="form-control" required />

                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary" onClick={Submit} type="submit">Submit form</button>
                    </div>
                </form>
            </div>

            <div>
                <Footer />
            </div>



        </div>

    )
}

export default Pledge;