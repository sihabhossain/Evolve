export interface Booking {
  date: string;
  startTime: string;
  endTime: string;
  user: string;
  facility: string;
  payableAmount: string;
  isBooked: "confirmed" | "unconfirmed" | "canceled";
}
