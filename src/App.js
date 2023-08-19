import "./App.css";
import Navbar from "./Components/navbar";
import HeroSection from "./Components/HeroSection";
import OurMenu from "./Components/OurMenu";
import Reservation from "./Components/Reservation";
import Footer from "./Components/Footer";
import Review from "./Components/Review";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <OurMenu />
      <Review />
      <Reservation />
      <Footer />
    </div>
  );
}

export default App;
