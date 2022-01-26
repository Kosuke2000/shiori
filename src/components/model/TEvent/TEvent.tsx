import { VFC } from "react";

import { Spacer } from "@/components/ui/Spacer";

import { TEventProps } from "@/types";

import { LinkCard } from "./LinkCard";

export const TEvent: VFC<TEventProps> = ({ event }) => {
  const { startAt, src, title } = event;
  const time = `${startAt.getHours()}:${startAt.getMinutes()}`;

  return (
    <div className="flex flex-col">
      <div className="flex items-center text-xl font-bold">
        <time>{time}</time>
        <Spacer size={12} />
        <span>{title}</span>
      </div>
      <LinkCard url={src} />
    </div>
  );
};
