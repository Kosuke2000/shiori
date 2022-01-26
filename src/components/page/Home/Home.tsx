import { Travel } from "@/components/model/Travel";

import { mockTravel } from "@/mocks/Travel";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return <Travel travel={mockTravel} />;
};

export default Home;
