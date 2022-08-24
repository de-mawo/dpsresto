import Hero from "../components/Hero";
import CTA from "../components/CTA";
import EnterAddress from "../components/EnterAddress";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TabContent from "../components/TabContent";
import MetaSeo from "../utils/MetaSeo";

const Home = () => {
    return (
        <>
            <MetaSeo title={`DPS | Home`} />
            <NavBar />
            <Hero />
            <div className="pt-100">
            <EnterAddress />
            </div>
            <TabContent />
            <CTA />
            <Footer />
        </>
    );
};

export default Home;
