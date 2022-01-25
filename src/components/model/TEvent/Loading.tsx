import { VFC } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// TODO: カードのローディングスケルトンを実装
export const Loading: VFC = () => {
  return (
    <div>
      <article className="flex justify-between h-40 rounded border border-gray-400 border-solid">
        <div className="flex flex-col justify-between p-5 w-3/5 hover:bg-gray-100">
          <h3 className="w-40 text-2xl truncate">
            <Skeleton width={70} />
          </h3>
          <p className="overflow-hidden h-12 text-base text-gray-500">
            <Skeleton count={2} className="w-full" />
          </p>
          <div className="">
            <Skeleton className="w-full" />
          </div>
        </div>
        <div className="w-2/5 h-full rounded">
          <Skeleton className="h-full" />
        </div>
      </article>
    </div>
  );
};
