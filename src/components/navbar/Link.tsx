import { Link as RouterLink } from "react-router-dom";
import { SelectedPage } from "@/shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <RouterLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        text-black transition duration-500  hover:text-white
      `}
      to={`/${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </RouterLink>
  );
};

export default Link;
