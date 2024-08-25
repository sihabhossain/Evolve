export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface FacilityType {
  name: string;
  description: string;
  pricePerHour: number;
  location: string;
  image: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
