import React from 'react';
import { useRouter } from "next/router";
import { Row, Col } from 'antd';
import styled from 'styled-components';
import Query from "../components/global/Query"; 
import PAGE_QUERY from "../apollo/queries/page/page";
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import Hero from '@bit/helmut.helmut-design.section.hero';

const Page = () => {

  const router = useRouter();

  return (
    <Query query={PAGE_QUERY} slug={router.query.id} >
      {({ data: { pages } }) => {
        const page = pages[0]
        if (page == undefined) {
          return 404
        } else {
          return (
            <Hero
              title="Trouvez le job que vous méritez"
              description="Bienvenue sur la démonstration des sites carrières que nous construisons pour nos clients. C'est l'occasion pour vous de tester le moteur en direct, et de découvrir le blog avec les landings."
            />
          );
        }
      }}
    </Query>
  );
};

export default Page; 