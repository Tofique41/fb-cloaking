// pages/index.tsx
import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>FB Cloaking Redirect</title>
      </Head>
      <main style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1>Welcome to FB Cloaking</h1>
        <p>This is the default homepage. Redirection will be handled by middleware.</p>
      </main>
    </>
  );
}
