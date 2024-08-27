import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
};

const ActionButton = ({ children }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-primary-500 px-10 py-2 hover:bg-primary-300 "
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
