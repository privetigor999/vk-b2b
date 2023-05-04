import { ISelect } from "../types/types";

export const floors: ISelect[] | null = [];
const MIN_FLOOR = 3;
const MAX_FLOOR = 27;

for (let i = MIN_FLOOR; i <= MAX_FLOOR; i++) {
  floors.push({ value: String(i), label: `Этаж ${i}` });
}
