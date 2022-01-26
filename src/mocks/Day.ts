import { Day } from "@/types";

import { mockTEventList0, mockTEventList1, mockTEventList2 } from "./TEvent";

export const mockDay0: Day = {
  date: new Date("2022-02-26 13:14:53"),
  events: mockTEventList0,
};

export const mockDay1: Day = {
  date: new Date("2022-02-27 13:14:53"),
  events: mockTEventList1,
};

export const mockDay2: Day = {
  date: new Date("2022-02-28 13:14:53"),
  events: mockTEventList2,
};

export const mockDays = [mockDay0, mockDay1, mockDay2];
