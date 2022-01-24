import Head from "next/head";

import { LinkCard } from "@/components/LinkCard";
import { Spacer } from "@/components/Spacer";
import { mockOgpDataList } from "@/types";

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
