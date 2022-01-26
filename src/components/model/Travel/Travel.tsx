import { useCallback, useState, VFC } from "react";

import { useBudouX } from "@/hooks/useBudouX";

import { Spacer } from "@/components/ui/Spacer";

import { TravelProps } from "@/types";

import { Day } from "../Day";

export const Travel: VFC<TravelProps> = ({ travel }) => {
  const { title, days } = travel;
  const [n, setN] = useState(0);
  const { parse } = useBudouX();

  const day = days[n];
  const isFirstDay = n === 0;
  const isLastDay = n === days.length - 1;
  const leftButtonProp = isFirstDay ? "text-gray-200" : "black cursor-pointer";
  const rightButtonProp = isLastDay ? "text-gray-200" : "black cursor-pointer";

  const toNextDay = useCallback(() => {
    if (!isLastDay) {
      setN((count) => count + 1);
    }
  }, [isLastDay]);

  const toPrevDay = useCallback(() => {
    if (!isFirstDay) {
      setN((count) => count - 1);
    }
  }, [isFirstDay]);

  return (
    <>
      <div className="overflow-auto relative px-2 h-screen bg-yellow-400">
        <main className="overflow-y-scroll z-0 p-12 mx-auto max-w-screen-md h-screen bg-white border-x-8 border-black ">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl">{parse(title)}</h1>
          </div>
          <Day day={day} />
          <Spacer size={40} />
        </main>
      </div>
      <footer className="flex fixed inset-x-0 bottom-0 z-10 justify-center p-4 w-screen bg-white drop-shadow-2xl">
        <div className="flex justify-evenly w-full max-w-screen-md text-2xl ">
          <div onClick={toPrevDay} className={`${leftButtonProp}`}>
            {"＜"}
          </div>
          <div>
            <h3>Day{n + 1}</h3>
          </div>
          <div onClick={toNextDay} className={`${rightButtonProp}`}>
            {"＞"}
          </div>
        </div>
      </footer>
    </>
  );
};
