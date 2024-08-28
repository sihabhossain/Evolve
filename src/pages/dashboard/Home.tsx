import WelcomeMessage from "@/components/dashboard/Welcome";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/store/hooks";

const HomePage = () => {
  const user = useAppSelector(selectCurrentUser);

  return <WelcomeMessage userName={user?.name || ""} />;
};

export default HomePage;
