import '../styles/globals.css'

export type TAlbumsProps = {
  Component?: any;
  pageProps: any;
}


function MyApp({ Component, pageProps }: TAlbumsProps) {
  return <Component {...pageProps} />
}

export default MyApp
