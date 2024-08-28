import React, { useEffect, useState } from "react";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        // Change this value to control when the button appears
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <div
        className="fixed bottom-6 right-6 flex w-[200px] cursor-pointer items-center justify-center space-x-2 rounded-full bg-primary-500 p-3 text-white shadow-lg"
        style={{ left: "50%", transform: "translateX(-50%)" }}
        onClick={scrollToTop}
        aria-label="Scroll to Top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 15l-7-7-7 7" />
        </svg>
        <span>Scroll to Top</span>
      </div>
    )
  );
};

export default ScrollToTopButton;
