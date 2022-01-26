import { VFC } from "react";

import { DayProps } from "@/types";

import { TEventList } from "../TEvent/TEventList";

export const Day: VFC<DayProps> = ({ day }) => {
  const { date, events } = day;
  const dayOfWeek = date.getDay(); // 曜日(数値)
  const dayOfWeekStr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
    dayOfWeek
  ];
  const theDate = `${date.getMonth() + 1}/${date.getDate()} ${dayOfWeekStr}`;

  return (
    <div>
      <div className="py-8 text-center">
        <h2 className=" text-2xl">{theDate}</h2>
      </div>
      <TEventList events={events} />
    </div>
  );
};
