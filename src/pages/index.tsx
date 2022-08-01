import type { NextPage } from 'next';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
    </>
  );
};

export default Home;
