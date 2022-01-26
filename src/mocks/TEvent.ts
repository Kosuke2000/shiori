import { TEvent } from "@/types";

// 初日の予定

const mockTEvent0_0: TEvent = {
  startAt: new Date("26 January 2022 13:14 UTC"),
  src: "https://rtrp.jp/spots/0550bb70-868b-4157-af55-a4f45dd3f3de/",
  title: "シーサイドももち海浜公園",
};
const mockTEvent0_1: TEvent = {
  startAt: new Date("26 January 2022 13:14 UTC"),
  src: "https://tabelog.com/fukuoka/A4001/A400103/40055192/",
  title: "焼き鳥 あたらよ",
};
const mockTEvent0_2: TEvent = {
  startAt: new Date("26 January 2022 20:20 UTC"),
  src: "https://rtrp.jp/spots/36578ee3-cf37-4830-9b28-fad5962ec672/",
  title: "ナイトクルーズ",
};
const mockTEvent0_3: TEvent = {
  startAt: new Date("26 January 2022 13:14 UTC"),
  src: "https://www.hafh.com/properties/954",
  title: "ホテル",
};

// 2日目の予定
const mockTEvent1_0: TEvent = {
  startAt: new Date("26 January 2022 11:15 UTC"),
  src: "https://www.mentaiju.com/",
  title: "めんたい重",
};
const mockTEvent1_1: TEvent = {
  startAt: new Date("26 January 2022 16:15 UTC"),
  src: "https://travel.biglobe.ne.jp/hotel/h019658/plan/",
  title: "温泉",
};
const mockTEvent1_2: TEvent = {
  startAt: new Date("26 January 2022 19:15 UTC"),
  src: "https://www.hafh.com/properties/989",
  title: "RE SORT",
};

// 3日目の予定
const mockTEvent2_0: TEvent = {
  startAt: new Date("26 January 2022 10:15 UTC"),
  src: "https://www.fukuoka-airport.jp/",
  title: "空港",
};

export const mockTEventList0 = [
  mockTEvent0_0,
  mockTEvent0_1,
  mockTEvent0_2,
  mockTEvent0_3,
];
export const mockTEventList1 = [mockTEvent1_0, mockTEvent1_1, mockTEvent1_2];
export const mockTEventList2 = [mockTEvent2_0];
