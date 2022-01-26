export type TEvent = {
  startAt: Date;
  src: string;
  title: string;
};

export interface TEventProps {
  event: TEvent;
}

export interface TEventListProps {
  events: TEvent[];
}
