import { Day } from "@/components/model/Day";

import { mockDay0 } from "@/mocks/Day";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="mx-auto max-w-screen-md">
      <Day day={mockDay0} />
    </main>
  );
};

export default Home;
