import { ISelect } from "../types/types";

export const timesInterval: ISelect[] | null = [];

export const MIN_TIME = 10;
export const MAX_TIME = 19;

for (let i = MIN_TIME; i <= MAX_TIME; i++) {
  timesInterval.push({ value: String(i), label: `${i}:00` });
}
