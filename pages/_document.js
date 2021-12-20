import Document, { Html, Head, Main, NextScript } from "next/document";
import { themes } from "../theme";
import { noFlash } from "../lib/noflash";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <script
            async
            dangerouslySetInnerHTML={{
              __html: noFlash(themes.dark, themes.light),
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
