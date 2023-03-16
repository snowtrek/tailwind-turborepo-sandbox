import Document, { Head, Html, Main, NextScript } from "next/document";
import { ModeScript } from "ui";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <ModeScript />
        </Head>
        <body className="bg-white antialiased dark:bg-zinc-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
