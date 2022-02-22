import { Travel } from "@/components/model/Travel";

import { TRAVEL_DATA } from "./data";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return <Travel travel={TRAVEL_DATA} />;
};

export default Home;
