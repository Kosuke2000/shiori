import { useCallback, useState, VFC } from "react";

import { Spacer } from "@/components/ui/Spacer";

import { TravelProps } from "@/types";

import { Day } from "../Day";

export const Travel: VFC<TravelProps> = ({ travel }) => {
  const { title, days } = travel;
  const [n, setN] = useState(0);
  const day = days[n];

  const toNextDay = useCallback(() => {
    if (n !== days.length - 1) {
      setN((count) => count + 1);
    }
  }, [n, days]);

  const toPrevDay = useCallback(() => {
    if (n !== 0) {
      setN((count) => count - 1);
    }
  }, [n]);

  return (
    <div className="h-screen bg-yellow-400">
      <main className="overflow-y-scroll z-0 p-12 mx-auto max-w-screen-md h-screen bg-white border-x-8 border-black">
        <div className="text-center">
          <h1 className="text-6xl">{title}</h1>
        </div>
        <Day day={day} />
        <Spacer size={40} />
      </main>
      <footer className="flex absolute bottom-0 z-10 justify-center p-4 w-screen bg-white">
        <div className="flex justify-evenly w-full max-w-screen-md text-2xl">
          <div onClick={toPrevDay}>{"＜"}</div>
          <div>
            <h3>Day{n + 1}</h3>
          </div>
          <div onClick={toNextDay}>{"＞"}</div>
        </div>
      </footer>
    </div>
  );
};
