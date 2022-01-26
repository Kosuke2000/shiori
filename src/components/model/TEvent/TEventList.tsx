import { VFC } from "react";

import { TEvent } from "@/components/model/TEvent";

import { Spacer } from "@/components/ui/Spacer";

import { TEventListProps } from "@/types";

export const TEventList: VFC<TEventListProps> = ({ events }) => {
  return (
    <div>
      {events.map((event) => (
        <>
          <TEvent event={event} key={event.startAt.toString()} />
          <Spacer size={40} />
        </>
      ))}
    </div>
  );
};
