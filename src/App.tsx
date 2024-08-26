import Home from "./components/home";
import ContactUs from "./components/contactUs";
import Featured from "./components/featured";
import HowItWorks from "./components/howItWorks/HowItWorks";
import OurTestimonials from "./components/ourTestimonials";
import Benefits from "./components/benefits/Benefits";

function App() {
  return (
    <div>
      <Home />
      <Featured />
      <HowItWorks />
      <OurTestimonials />
      <Benefits />
    </div>
  );
}

export default App;
