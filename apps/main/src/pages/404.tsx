import { NextPage } from "next";
import Head from "next/head";
import { Prose } from "ui";

const Custom404: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Not Found | Demo App</title>
      </Head>
      <Prose>
        <h1>Not Found</h1>
        <p className="lead">404 error</p>
      </Prose>
    </main>
  );
};

export default Custom404;
