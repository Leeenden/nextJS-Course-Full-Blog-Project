import Document, { Html, Head, Main, Nextscript } from "next/document "

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <Nextscript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
