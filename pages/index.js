import { Reset } from "styled-reset";
import Head from "next/head";

import { Box } from "../utils/components/Box";
import { Game2048 } from "../2048/Game2048";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>2048</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Reset />
      <main>
        <Box
          height="100vh"
          width="100vw"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Game2048 />
        </Box>
      </main>
    </div>
  );
}
