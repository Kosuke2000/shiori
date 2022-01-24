import { VFC } from "react";

type Axis = "vertical" | "horizontal";

export const Spacer: VFC<{ size: number; axis?: Axis }> = ({ size, axis }) => {
  const width = axis === "vertical" ? 1 : size;
  const height = axis === "horizontal" ? 1 : size;

  return (
    <span
      style={{
        display: "block",
        width,
        minWidth: width,
        height,
        minHeight: height,
      }}
    />
  );
};
