import Head from 'next/head'

import 'react-notion/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta content="#ffffff" name="theme-color" />
      <title>Meu blog</title>
    </Head>
    <Component {...pageProps} />
  </>
}
