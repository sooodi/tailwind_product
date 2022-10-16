import '../styles/globals.css'
import '../styles/global.css';
import '../styles/index.css';
import '../styles/App.css';
import Layout from '../layout/wrapper/Wrapper';

import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  
  return (<Layout>
     <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        </QueryClientProvider>
      </Layout>)
   
}

export default MyApp
