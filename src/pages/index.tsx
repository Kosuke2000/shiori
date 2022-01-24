import Head from "next/head";

import { LinkCard } from "@/components/model/TEvent/LinkCard";
import { Spacer } from "@/components/model/ui/Spacer";

import { mockOgpDataList } from "@/mocks/OgpData";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="max-w-screen-md mx-auto">
      {mockOgpDataList.map((ogp, i) => (
        <>
          <LinkCard url="https://beta.reactjs.org/" key={i.toString()} />
          <Spacer size={10} />
        </>
      ))}
    </main>
  );
};

export default Home;
