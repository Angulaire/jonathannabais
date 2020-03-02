import React from 'react';
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import Hero from '../components/section/Hero';
import HeroSearch from '../components/section/HeroSearch';
import defaultPage from '../hocs/defaultPage'

interface IndexPageProps {
  isAuthenticated: boolean;
}

class IndexPage extends React.Component<IndexPageProps> {

  render() {
    const { isAuthenticated } = this.props;
    return (
      <>
        <Header afterScroll/>
        <Hero
          title="Trouvez le job que vous méritez"
          description="Bienvenue sur la démonstration des sites carrières que nous construisons pour nos clients. C'est l'occasion pour vous de tester le moteur en direct, et de découvrir le blog avec les landings."
        />
        <Footer />
      </>
    )
  }
  
}
export default IndexPage