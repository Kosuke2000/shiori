import { VFC } from "react";

import { TEventProps } from "@/types";

import { LinkCard } from "./LinkCard";

export const TEvent: VFC<TEventProps> = ({ event }) => {
  const { startAt, src } = event;
  const time = `${startAt.getHours()}:${startAt.getMinutes()}`;

  return (
    <div className="flex flex-col">
      <time className="text-xl font-bold">{time}</time>
      <LinkCard url={src} />
    </div>
  );
};
