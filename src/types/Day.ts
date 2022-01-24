import { TEvent } from "./TEvent";

export type Day = {
  date: Date;
  events: TEvent[];
};

export interface DayProps {
  day: Day;
}

export interface DayListProps {
  days: Day[];
}
