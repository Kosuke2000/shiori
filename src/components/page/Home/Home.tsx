import { TEventList } from "@/components/model/TEvent/TEventList";

import { mockTEventList } from "@/mocks/TEvent";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="mx-auto max-w-screen-md">
      <TEventList events={mockTEventList} />
    </main>
  );
};

export default Home;
