import Home from "./components/home";
import ContactUs from "./components/contactUs";
import Featured from "./components/featured";
import HowItWorks from "./components/howItWorks/HowItWorks";
import OurTestimonials from "./components/ourTestimonials";

function App() {
  return (
    <div>
      <Home />
      <Featured />
      <HowItWorks />
      <OurTestimonials />
      <ContactUs />
    </div>
  );
}

export default App;
