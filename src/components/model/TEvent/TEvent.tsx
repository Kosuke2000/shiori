import { VFC } from "react";

import { Spacer } from "@/components/ui/Spacer";

import { TEventProps } from "@/types";

import { LinkCard } from "./LinkCard";

export const TEvent: VFC<TEventProps> = ({ event }) => {
  const { startAt, src, title } = event;

  const hour = startAt.getHours();
  const minutes =
    startAt.getMinutes() > 9
      ? "" + startAt.getMinutes()
      : "0" + startAt.getMinutes();
  const time = `${hour}:${minutes}`;

  return (
    <div className="flex flex-col">
      <div className="flex items-center text-xl font-bold">
        <time>{time}</time>
        <Spacer size={12} />
        <span className="truncate">{title}</span>
      </div>
      <Spacer size={12} />
      <LinkCard url={src} />
    </div>
  );
};
