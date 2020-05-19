/** @jsx jsx */
import { jsx, Grid, Card, Button } from 'theme-ui';
import { GetStaticProps } from 'next';
import { request } from 'graphql-request';
import { print } from 'graphql/language/printer';
import gql from 'graphql-tag';
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import { Mail, Phone, Loc } from '../components/global/Icons';
import ContactForm from '../components/data-entry/ContactForm';

const ContactCard = {
  'p': {
    display: 'flex',
    flexDirection: 'column'
  }
}

const Contact = ({ navigation }) => {  

  return (
      <>
        <div
          sx={{
            backgroundImage: 'url(https://res.cloudinary.com/angulaire/image/upload/v1586182535/suhg8eda7lfcztwpy71x.png)',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <Header navbar={navigation.navbar}/>
          <div
            sx={{
              display: 'flex',
              alignItems: ['flex-start', 'flex-end'],
              ml: ['0', '140px'],
              minHeight: ['360px', '300px']
            }}>
            <h1>Contact</h1>
          </div>
          <Grid
            columns={['1fr', '3fr 5fr']}
            sx={{
              bg: 'white',
              position: 'relative',
              p: ["40px 20px", "80px 140px 80px 70px"],
              ml: ["0", "70px"],
              color: 'blue',
            }}
          >
            <div sx={{ order: ['2', '1'] }}>
              <div sx={{ display: 'flex', mb: '30px' }}>
                <Mail />
                <div 
                  sx={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    ml: '30px',
                    'a': { fontSize: '2', color: 'blue', fontWeight: 'bold'},
                    'p': { fontSize: '0', mb: '0'}
                  }}>
                  <p>EMAIL</p>
                  <a href="mailto:jonathan@angulaire.io" target="_blank">jonathan@angulaire.io</a>
                </div>
              </div>
              <div sx={{ display: 'flex', mb: '30px' }}>
                <Phone />
                <div
                  sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    ml: '30px',
                    'a': { fontSize: '2', color: 'blue', fontWeight: 'bold'},
                    'p': { fontSize: '0', mb: '0'}
                  }}>
                  <p>TÉLÉPHONE</p>
                  <a href="tel:+33647312483">06 47 31 24 83</a>
                </div>
              </div>
              <div sx={{ display: 'flex', mb: '30px' }}>
                <Loc />
                <div
                  sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    ml: '30px',
                    'a': { fontSize: '2', color: 'blue', fontWeight: 'bold'},
                    'p': { fontSize: '0', mb: '0'}
                  }}>
                  <p>LOCALISATION</p>
                  <a href="https://goo.gl/maps/RCPedZdy1Lwk9qNr8">28 rue Feydeau, 75002 Paris</a>
                </div>
              </div>
              <Button sx={{ variant: 'primary', width: '100%' }}>
                Réserver un créneau
              </Button>

            </div>
            <div
              sx={{
                minHeight: ['700px', '400px'],
                order: ['1', '2']
              }}
            >
              <Card
                sx={{
                  variant: 'primary',
                  position: 'absolute',
                  width: ['80%', '35%'],
                  top: ['-160px'],
                  right: ['40px', '160px'],
                  'h2': {
                    fontSize: '5',
                    fontWeight: 'bold',
                    color: 'blue',
                    mb: '24px'
                  }
                }}>
                  <h2>Discutons ensemble</h2>
                  <p>Je reviendrai vers vous dans un délai de 48 heures afin de fixer un premier rendez-vous.</p>
                  <ContactForm />
              </Card>
              
            </div>
          </Grid>
        </div>
        <Footer navigation={navigation.footer}/>
      </>
  );
};

const CONTACT_QUERY = gql`
  query Contact {
    navigation {
      navbar
      footer
    }
  }
`;

export const getStaticProps: GetStaticProps = async context => {
  const data = await request(`${process.env.API_BASE_URL}/graphql`, print(CONTACT_QUERY))
  const navigation = await data.navigation
  return { props: { navigation } }
}


export default Contact