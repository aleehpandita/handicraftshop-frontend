import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang="en-US">
      <link rel="icon" type="image/png" href="mexican-woman.png"></link>
      <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
