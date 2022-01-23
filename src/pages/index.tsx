import Head from "next/head";

import { LinkCard } from "@/components/LinkCard";
import { mockOgpData } from "@/types";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="max-w-screen-md mx-auto">
      <LinkCard ogp={mockOgpData} />
    </main>
  );
};

export default Home;
