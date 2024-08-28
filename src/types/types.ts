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
