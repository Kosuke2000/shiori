import { Day } from "@/types";

import { mockTEventList0, mockTEventList1, mockTEventList2 } from "./TEvent";

export const mockDay0: Day = {
  date: new Date("26 Febrary 2022 13:14 UTC"),
  events: mockTEventList0,
};

export const mockDay1: Day = {
  date: new Date("27 Febrary 2022 13:14 UTC"),
  events: mockTEventList1,
};

export const mockDay2: Day = {
  date: new Date("28 Febrary 2022 13:14 UTC"),
  events: mockTEventList2,
};

export const mockDays = [mockDay0, mockDay1, mockDay2];
