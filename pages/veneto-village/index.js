import Head from 'next/head';
import CompanyCTA from '@components/commons/CompanyCTA';
import Contact from '@components/commons/Contact';

export default function VenetoVillage() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='section'>
        <div className='container'>
          <h1>Veneto Village</h1>
        </div>
      </section>
      <div className='commons'>
        <CompanyCTA />
        <Contact />
      </div>
    </div>
  );
}
