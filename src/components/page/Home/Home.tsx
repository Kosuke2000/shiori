import Head from "next/head";

import { TEvent } from "@/components/model/TEvent";

import { Spacer } from "@/components/ui/Spacer";

import { mockTEventList } from "@/mocks/TEvent";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="mx-auto max-w-screen-md">
      {mockTEventList.map((event) => (
        <>
          <TEvent event={event} key={event.startAt.toISOString()} />
          <Spacer size={12} />
        </>
      ))}
    </main>
  );
};

export default Home;
