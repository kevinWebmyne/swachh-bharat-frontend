import Footer from "./Footer";
import { Container } from 'react-bootstrap'
import {useNavigate } from 'react-router-dom'
import StripeCheckout from "react-stripe-checkout";
import Navbars from "./Navbar";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Donate = () => {
    const [name, SetName] = useState('');
    const [dropState, setDropState] = useState([]);
    const [amount, SetAmount] = useState('');
    const [email, SetEmail] = useState('');
    const [phone, SetPhone] = useState('');
    const [panNumber, SetPanNumber] = useState('');
    const [streetAddress, SetStreetAddress] = useState('');
    const [addressLine2, SetAddressLine2] = useState('');
    const [city, SetCity] = useState('');
    const [state, SetState] = useState('');
    const [postalCode, SetPostalCode] = useState('');
    const [country, SetCountry] = useState('');

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



    const data = {
        amount: amount,
        name: name,
        emailAddress: email,
        phone: phone,
        streetAddress: streetAddress,
        panNumber: panNumber,
        addressLine2: addressLine2,
        city: city,
        state: state,
        postalCode: postalCode,
        country: "India"
    }

    toast.configure()

    async function handleToken(token, addresses) {
        const response = await axios.post(
          "http://localhost:3001/api/noAuth/checkout",{
            headers: {
                'Content-Type': 'application/json',
            }, token, data }
        );
    
        console.log(response.status)
    
        if (response.status === 200) {
          toast("Success! Check email for details", { type: "success" });
        } else {
          toast("Something went wrong", { type: "error" });
        }
      }
      


    useEffect(() => {
        getStateData()
    }, [toast])



    return (
        <div>
            <div><Navbars /></div>
            <div >
                <img className="responsive-image__image" alt='images' src={`https://staging.webmynehost.com/swachh-bharat/images/donate-banner.jpg`} height={500} width={1370} />
            </div>
            <div>
                <Container style={{ backgroundColor: '#f0f0f0', marginTop: 40, maxWidth: '100%' }}>
                    <h1 className='text-center'  >SELECT THE AMOUNT YOU WISH TO DONATE</h1>
                    <hr />
                    <div>
                        <div >

                        </div>
                    </div>
                </Container>

            </div >
            <div style={{ marginLeft: 20, marginRight: 20 }}>
                <form class="row g-3 needs-validation" >
                    <div class="col-md-6">
                        <label for="validationCustom01" class="form-label">Helping Amount</label>
                        <input type="Number" class="form-control" onChange={(e) => { SetAmount(e.target.value) }} required />

                    </div>
                    <div class="col-md-6">
                        <label for="validationCustomUsername" class="form-label">Name</label>
                        <div class="input-group has-validation">
                            <input type="text" onChange={(e) => { SetName(e.target.value) }} class="form-control" aria-describedby="inputGroupPrepend" required />

                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustomUsername" class="form-label">Email</label>
                        <div class="input-group has-validation">
                            <div class="input-group-text" id="inputGroupPrepend">@</div>
                            <input type="text" onChange={(e) => { SetEmail(e.target.value) }} class="form-control" aria-describedby="inputGroupPrepend" required />

                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom03" class="form-label">Phone</label>
                        <input type="number" onChange={(e) => { SetPhone(e.target.value) }} class="form-control" required />

                    </div>
                    <div class="col-md-5">
                        <label for="validationCustom01" class="form-label">PAN Number</label>
                        <input type="text" class="form-control" onChange={(e) => { SetPanNumber(e.target.value) }} required />
                    </div>
                    <div>
                        <Container style={{ backgroundColor: '#f0f0f0', marginTop: 40, maxWidth: '100%' }}>
                            <h1 className='text-center'  >ADDRESS   </h1>
                            <hr />
                            <div>
                                <div >

                                </div>
                            </div>
                        </Container>

                    </div >
                    <div class="col-md-6">
                        <label for="validationCustom03" class="form-label">Street Address</label>
                        <input type="text" onChange={(e) => { SetStreetAddress(e.target.value) }} class="form-control" required />

                    </div>
                    <div class="col-md-6">
                        <label for="validationCustom03" class="form-label">Address Line 1</label>
                        <input type="text" onChange={(e) => { SetAddressLine2(e.target.value) }} class="form-control" required />

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
                        <label for="validationCustom03" class="form-label">city</label>
                        <input type="text" onChange={(e) => { SetCity(e.target.value) }} class="form-control" required />

                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom03" class="form-label">Postal Code</label>
                        <input type="number" onChange={(e) => { SetPostalCode(e.target.value) }} class="form-control" required />

                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom03" class="form-label">Country</label>
                        <select class="form-select" value="India" onChange={(e) => { SetCountry(e.target.value) }} required>
                            <option value="India" >India</option>


                        </select>

                    </div>

                   
                </form>
                        <div>
                            <StripeCheckout
                               
                                stripeKey="pk_test_51KA6gcSI4CnqFLAnhxuIFKchC7u3ZX8a0HGyKa7R5pMPWjjhhZYXw448VDVb5UXjW4N0LfsdF8YC1jhOmG33eUrq00LSll0gcg"
                                token={handleToken}
                                amount={amount * 100}
                            />
                    </div>
            </div>
            <div><Footer /></div>
        </div>
    )
}

export default Donate;