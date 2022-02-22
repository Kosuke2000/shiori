import { Day, Travel } from "@/types";

const Day1: Day = {
  date: new Date(2022, 2, 25),
  events: [
    {
      title: "福岡空港",
      startAt: new Date("25 January 2022 04:05 UTC"),
      src: "https://www.fukuoka-airport.jp/",
    },
    {
      title: "博多駅",
      startAt: new Date("25 January 2022 04:00 UTC"),
      src: "https://www.jrkyushu.co.jp/railway/station/1191771_1601.html",
    },
    {
      title: "太宰府天満宮",
      startAt: new Date("25 January 2022 04:00 UTC"),
      src: "https://www.dazaifutenmangu.or.jp/",
    },
    {
      title: "九州国立博物館",
      startAt: new Date("25 January 2022 04:00 UTC"),
      src: "https://twitter.com/kyuhaku_koho",
    },
    {
      title: "お食事どこ",
      startAt: new Date("25 January 2022 04:00 UTC"),
      src: "https://www.fukuoka-airport.jp/",
    },
    {
      title: "BUNSHODO HOTEL",
      startAt: new Date("25 January 2022 04:00 UTC"),
      src: "https://ldhd.co.jp/bunshodo/",
    },
  ],
};

const Day2: Day = {
  date: new Date(2022, 2, 26),
  events: [
    {
      title: "朝ごはん",
      startAt: new Date("26 January 2022 04:00 UTC"),
      src: "https://www.fukuoka-airport.jp/",
    },
    {
      title: "チームラボ",
      startAt: new Date("26 January 2022 04:00 UTC"),
      src: "https://www.teamlab.art/jp/e/forest/",
    },
    {
      title: "福岡城跡",
      startAt: new Date("26 January 2022 04:00 UTC"),
      src: "https://bunkazai.city.fukuoka.lg.jp/cultural_properties/detail/62",
    },
    {
      title: "糸島",
      startAt: new Date("26 January 2022 04:00 UTC"),
      src: "https://www.city.itoshima.lg.jp/",
    },
    {
      title: "モツ鍋",
      startAt: new Date("26 January 2022 04:00 UTC"),
      src: "https://www.fukuoka-airport.jp/",
    },
  ],
};

const Day3: Day = {
  date: new Date(2022, 2, 27),
  events: [
    {
      title: "天神地下街",
      startAt: new Date("27 January 2022 04:00 UTC"),
      src: "https://www.tenchika.com/",
    },
    {
      title: "中部国際空港セントレア",
      startAt: new Date("27 January 2022 04:00 UTC"),
      src: "https://www.centrair.jp/",
    },
    {
      title: "名古屋駅",
      startAt: new Date("27 January 2022 04:00 UTC"),
      src: "https://railway.jr-central.co.jp/station-guide/shinkansen/nagoya/map.html",
    },
    {
      title: "晩ごはん",
      startAt: new Date("27 January 2022 04:00 UTC"),
      src: "https://www.fukuoka-airport.jp/",
    },
    {
      title: "米原駅",
      startAt: new Date("27 January 2022 04:00 UTC"),
      src: "https://www.jr-odekake.net/eki/timetable?id=0610147",
    },
    {
      title: "福井駅",
      startAt: new Date("27 January 2022 04:00 UTC"),
      src: "https://www.jr-odekake.net/eki/timetable?id=0541430",
    },
    {
      title: "金沢駅",
      startAt: new Date("27 January 2022 04:00 UTC"),
      src: "https://www.kanazawa-kankoukyoukai.or.jp/",
    },
  ],
};

export const TRAVEL_DATA: Travel = {
  title: "福岡男三人旅",
  days: [Day1, Day2, Day3],
};
