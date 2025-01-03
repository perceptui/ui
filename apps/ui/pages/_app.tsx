import "../styles.css"
import "nextra-theme-docs/style.css"
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component darkMode {...pageProps} />;
}
