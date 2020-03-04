import React from 'react';
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import Hero from '../components/section/Hero';
import CTA from '../components/section/CTA';
import Customers from '../components/section/Cutsomers';

interface IndexPageProps {
  isAuthenticated: boolean;
}

class IndexPage extends React.Component<IndexPageProps> {

  render() {
    return (
      <>
        <Hero
          title="Je pilote des stratégies pour les marques de demain."
        />
        <Customers />
        <CTA />
        <Footer />
      </>
    )
  }
  
}
export default IndexPage