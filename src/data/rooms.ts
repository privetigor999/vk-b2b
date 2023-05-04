import { ISelect } from "../types/types";

export const rooms: ISelect[] | null = [];
const MIN_NUMBER_ROOM = 1;
const MAX_NUMBER_ROOM = 10;

for (let i = MIN_NUMBER_ROOM; i <= MAX_NUMBER_ROOM; i++) {
  rooms.push({ value: String(i), label: `Комната ${i}` });
}
