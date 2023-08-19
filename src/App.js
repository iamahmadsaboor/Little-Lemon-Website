import "./App.css";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import OurMenu from "./Components/OurMenu";
import Reservation from "./Components/Reservation";
import Footer from "./Components/Footer";
import Review from "./Components/Review";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <OurMenu />
      <Reservation />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
