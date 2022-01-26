import { VFC } from "react";

import { TravelProps } from "@/types";

// TODO: 見た目の実装
export const Travel: VFC<TravelProps> = ({ travel }) => {
  const { title, days } = travel;

  // 「何日目」を表現するStateを用意する

  return (
    <div>
      <div>{/* Stateに合わせてdaysから該当のdayを表示する */}</div>
      <div>
        {/* 押すとStateを変更するボタンを書く */}
        {/* ボタンの状態は、Stateに連動して変化する */}
      </div>
    </div>
  );
};
