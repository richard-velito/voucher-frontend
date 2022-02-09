import Head from 'next/head'

import Header from '../app/components/Header';
import VoucherList from '../app/components/VoucherList';
import Footer from '../app/components/Footer';

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Store vouchers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='container'>
        <Header />

        <VoucherList />

        <Footer />
      </div>
      
    </div>
  )
}
