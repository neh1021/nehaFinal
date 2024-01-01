import Carousel from 'react-bootstrap/Carousel';
import image from '../assets/images/callsense.png'
function HeroSection() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    height={700}
                    className="d-block w-100"
                    src={image}
                    alt="First slide"
                />
                <Carousel.Caption>
                    {/*<h5>First slide label</h5>*/}
                    {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HeroSection;
