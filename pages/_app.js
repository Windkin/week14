import React from 'react'
import Head from 'next/head';
import '../styles/bootstrap.min.css';
import '../styles/globals.css'
import initAuth from '../utils/initAuth'
import { ChakraProvider } from "@chakra-ui/react"

initAuth()

function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
    return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
