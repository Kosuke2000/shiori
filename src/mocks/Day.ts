import { Day } from "@/types";

import { mockTEventList } from "./TEvent";

export const mockDay0: Day = {
  date: new Date("2022-02-26 13:14:53"),
  events: mockTEventList,
};

export const mockDay1: Day = {
  date: new Date("2022-02-27 13:14:53"),
  events: mockTEventList,
};

export const mockDay2: Day = {
  date: new Date("2022-02-28 13:14:53"),
  events: mockTEventList,
};

export const mockDays = [mockDay0, mockDay1, mockDay2];
