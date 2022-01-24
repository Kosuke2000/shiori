import { Day } from "./Day";

export type Travel = {
  title: string;
  days: Day[];
};

export interface TravelProps {
  travel: Travel;
}
