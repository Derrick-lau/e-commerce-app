import Document, { Html, Head, Main, NextScript } from 'next/document'
import CustomHead from '../components/documents/CustomHead'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <CustomHead/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument


