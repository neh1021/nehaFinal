import HeroSection from "./HeroSection";
import Projects from "./Projects";
import ContactUs from "./ContactUs";
import SocialMediaProfiles from "./SocialMediaProfiles";
import {ProductDescription} from "./ProductDetail";


function WelcomePage() {
    return (
        <>
            <HeroSection />
            <SocialMediaProfiles />
            <Projects />
            <ContactUs />
        </>
    );
}

export default WelcomePage;
