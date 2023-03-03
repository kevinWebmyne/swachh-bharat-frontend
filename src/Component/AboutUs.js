import { useEffect, useState } from "react";
import Footer from './Footer';
import Navbar from "./Navbar";


const AboutUs = () => {

    
    const [items, setItems] = useState([]);

    const getAboutData = async () => {
        await fetch("http://localhost:3001/api/noAuth/pages/?page=1&size=100").then((res) => {
            res.json().then((result) => {
                if (result) {
                    const results = result.data.filter((curData) => {
                        return curData.pageTitle === 'What We Do';
                    })
                    console.log(results);
                    setItems(results)
                }
            })
        })
    }

    useEffect(() => {
        getAboutData()
    }, [])

    return (
        <div>
            <div>
            <div> <Navbar /></div>
                <div className="slider-image">
                    <img className="responsive-image__image"   alt='images' src={`https://staging.webmynehost.com/swachh-bharat/images/about-banner.jpg`} height={500} width={1370} />
                </div>                
            </div>
            <div>
            {items.map((product, t) => (
                               
                                  <div dangerouslySetInnerHTML={ {__html: (product.description)}} />
                                
                        ))}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default AboutUs;