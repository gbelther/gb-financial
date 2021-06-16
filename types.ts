export interface ITransaction {
  _id: string;
  description: string;
  value: number;
  category: string;
  year: number;
  month: number;
  day: number;
  yearMonth: string;
  yearMonthDay: string;
  type: string;
}
