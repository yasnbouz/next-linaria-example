import Head from "next/head";

import Box from "../components/Box";
import Heading from "../components/Heading";
import ToggleButton from "../components/ToggleButton";

export default function Home() {
  return (
    <div>
      <Head>
        <title>With Linaria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ToggleButton />
        <Box>
          <Heading primary>Linaria</Heading>
          <Heading as="h2">Zero runtime CSS in JS</Heading>
        </Box>
      </main>
    </div>
  );
}
