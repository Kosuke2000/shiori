import { VFC } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// TODO: カードのローディングスケルトンを実装
export const Loading: VFC = () => {
  return (
    <div>
      <article className="flex justify-between border border-gray-400 border-solid rounded h-40">
        <div className="flex flex-col justify-between p-5  hover:bg-gray-100 w-3/5">
          <h3 className="text-2xl truncate w-40 ">
            <Skeleton width={70} />
          </h3>
          <p className="text-base text-gray-500 overflow-hidden h-12">
            <Skeleton count={2} className="w-full" />
          </p>
          <div className="">
            <Skeleton className="w-full" />
          </div>
        </div>
        <div className="h-full w-2/5 rounded">
          <Skeleton className="h-full" />
        </div>
      </article>
    </div>
  );
};
