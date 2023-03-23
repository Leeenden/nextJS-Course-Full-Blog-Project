import Document, { Html, Head, Main, Nextscript } from "next/document "

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <body>
          <Main />
          <Nextscript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
