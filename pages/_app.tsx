import { CustomFooter } from '@/components/layouts/footer'
import { CustomHeader } from '@/components/layouts/header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/dist/client/script'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head >
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content="Bismillah Cooling, Referigenation Installatio and Repair, Air Cooling Service" name="keywords" />
      <meta content="Reliable Cooling Repair & Installation Service | Trusted Referigenation Solutions" name="description" />
      <title>Bismillah Cooling Center</title>

    </Head>
    <CustomHeader />
    <Component {...pageProps} />
    <CustomFooter />

    <Script src="lib/wow/wow.min.js"></Script>
    <Script src="lib/easing/easing.min.js"></Script>
    <Script src="lib/waypoints/waypoints.min.js"></Script>
    <Script src="lib/owlcarousel/owl.carousel.min.js"></Script>
    <Script src="lib/counterup/counterup.min.js"></Script>
    <Script src="lib/parallax/parallax.min.js"></Script>
    <Script src="js/main.js"></Script>
  </>

}
