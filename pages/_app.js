import '../styles/globals.css'
import ApolloClient from "apollo-boost";
import { ContextProvider } from '@/utils/Context';

export const client = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app/"
});


export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}
