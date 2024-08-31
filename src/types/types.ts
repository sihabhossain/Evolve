export interface Booking {
  date: string;
  startTime: string;
  endTime: string;
  user: string;
  facility: string;
  payableAmount: string;
  isBooked: "confirmed" | "unconfirmed" | "canceled";
}

export type FormData = {
  name?: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  role?: string;
};

export interface Facility {
  _id: string;
  name: string;
  description: string;
  pricePerHour: number;
  location: string;
  image: string;
  isDeleted: boolean;
}
