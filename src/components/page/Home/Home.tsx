import Head from "next/head";

import { LinkCard, LinkCardView } from "@/components/model/TEvent/LinkCard";

import { Spacer } from "@/components/ui/Spacer";

import { mockOgpDataList } from "@/mocks/OgpData";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="mx-auto max-w-screen-md">
      {mockOgpDataList.map((ogp, i) => (
        <>
          <LinkCard url="https://beta.reactjs.org/" key={i.toString()} />
          <Spacer size={10} />
        </>
      ))}
      {mockOgpDataList.map((ogp, i) => (
        <>
          <LinkCardView ogp={ogp} key={i.toString()} />
          <Spacer size={10} />
        </>
      ))}
    </main>
  );
};

export default Home;
