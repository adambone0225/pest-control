/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Process />
      <Pricing />
      <FAQ />
      <Testimonials />
      <About />
      <Contact />
    </Layout>
  );
}
