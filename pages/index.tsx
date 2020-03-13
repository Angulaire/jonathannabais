import React from 'react';
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import Hero from '../components/section/Hero';
import CTA from '../components/section/CTA';
import Customers from '../components/section/Customers';
import TextGrid from '../components/section/TextGrid';
import Tools from '../components/section/Tools';

class IndexPage extends React.Component {

  render() {
    return (
      <>
        <Hero
          title="Je pilote des stratégies pour les marques de demain."
        />
        <TextGrid
          title="Mon Quotidien"
          textCards={[
            {title: "Audit", description: "Veniam nostrud do amet consequat."},
            {title: "Conseil", description: "Sunt elit deserunt eiusmod nulla consequat qui eiusmod occaecat."},
            {title: "Design", description: "Excepteur amet sunt aliquip veniam reprehenderit ex sint aliquip cupidatat."},
            {title: "Gestion", description: "Ad ad Lorem irure ea aute irure nulla laboris pariatur dolore labore exercitation sint laborum."},
            {title: "Production", description: "Ad adipisicing velit quis ut excepteur ut dolore mollit ex in."},
            {title: "Suivi", description: "Sunt proident magna excepteur ad."}
          ]}
          color="secondary"
          space="marginLeft"
        />
        <TextGrid
          title="Pouquoi me choisir ?"
          textCards={[
            {title: "Champ d'action", description: "Veniam nostrud do amet consequat."},
            {title: "Expertises", description: "Sunt elit deserunt eiusmod nulla consequat qui eiusmod occaecat."},
            {title: "Track record", description: "Excepteur amet sunt aliquip veniam reprehenderit ex sint aliquip cupidatat."},
          ]}
          color="primary"
          space="default"
        />
        <TextGrid
          title="Comment s'y prendre ?"
          textCards={[
            {number: 1, title: "Rencontre", description: "Veniam nostrud do amet consequat."},
            {number: 2, title: "Qualification", description: "Sunt elit deserunt eiusmod nulla consequat qui eiusmod occaecat."},
            {number: 3, title: "Proposition", description: "Excepteur amet sunt aliquip veniam reprehenderit ex sint aliquip cupidatat."},
          ]}
          color="secondary"
          space="marginLeft"
        />
        <Tools
          title="Ils* adorent"
          color="primary"
          space="default"
        />
        <Customers />
        <CTA />
        <Footer />
      </>
    )
  }
  
}
export default IndexPage