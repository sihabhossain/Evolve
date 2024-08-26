import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Navbar from "./components/navbar";
import Home from "./components/home";
import ContactUs from "./components/contactUs";
import Footer from "./components/footer";
import Featured from "./components/featured";
import HowItWorks from "./components/howItWorks/HowItWorks";
import OurTestimonials from "./components/ourTestimonials";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home />
      <Featured />
      <HowItWorks />
      <OurTestimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
