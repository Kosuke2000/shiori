import { TEvent } from "@/types";

const mockTEvent0: TEvent = {
  startAt: new Date("2022-01-26 13:14:53"),
  src: "https://tabelog.com/fukuoka/A4001/A400103/40055192/",
};

const mockTEvent1: TEvent = {
  startAt: new Date("2022-01-26 13:15:48"),
  src: "https://tabelog.com/fukuoka/A4001/A400103/40055192/",
};

const mockTEvent2: TEvent = {
  startAt: new Date("2022-01-26 13:15:55"),
  src: "https://tabelog.com/fukuoka/A4001/A400103/40055192/",
};

const mockTEvent3: TEvent = {
  startAt: new Date("2022-01-26 13:15:55"),
  src: "https://tabelog.com/fukuoka/A4001/A400103/40055192/",
};

export const mockTEventList = [
  mockTEvent0,
  mockTEvent1,
  mockTEvent2,
  mockTEvent3,
];
