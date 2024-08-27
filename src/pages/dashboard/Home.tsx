import WelcomeMessage from "@/components/dashboard/Welcome";

const HomePage = () => {
  const userName = "Sihab Hossain";

  return <WelcomeMessage userName={userName} />;
};

export default HomePage;
