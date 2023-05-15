import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from 'next-themes'
import theme from '../theme'
import NextNProgress from 'nextjs-progressbar';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
      <NextNProgress />
    </ChakraProvider>
  )
}

