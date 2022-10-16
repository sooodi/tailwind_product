/* eslint-disable @next/next/no-page-custom-font */
import * as React from 'react';
import Head from 'next/head';


import {Container} from '../container/Container';
import {useRouter} from 'next/dist/client/router';

export interface LayoutProps {
  children: React.ReactNode;
}

export function Wrapper({children}: LayoutProps) {
 
  const {asPath} = useRouter();
 

  return (
    <>
      <Head>
        <title>Behtraino</title>
        <meta name="description" content="Socious" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Hahmlet:wght@600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css"
        />
        <script
          src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"
          async
        ></script>
      </Head>
      <Container>{children}</Container>
    </>
  );
}

export default Wrapper;
