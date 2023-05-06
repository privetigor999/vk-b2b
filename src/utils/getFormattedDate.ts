import dayjs from "dayjs";

// get date from M2 to DD/MM/YYYY
export const getFormattedDate = (date: any): string => {
  const formattedDate = dayjs(date).format("DD/MM/YYYY");
  return formattedDate;
};
