export type TEvent = {
  startAt: Date;
  src: string;
};

export interface TEventProps {
  event: TEvent;
}

export interface TEventListProps {
  events: TEvent[];
}
