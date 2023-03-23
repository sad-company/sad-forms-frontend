import '@/styles/globals.css'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import type { AppProps } from 'next/app'

const theme = createTheme({
    type: 'dark',
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <NextUIProvider theme={theme}>
            <Component {...pageProps} />
        </NextUIProvider>
    )
}
