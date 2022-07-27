import Banner from "../components/Banner";
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
            <Banner />
            <EnterAddress />
            <TabContent />
            <CTA />
            <Footer />
        </>
    );
};

export default Home;
