import React from 'react';
import { useRouter } from "next/router";
import { Row, Col } from 'antd';
import styled from 'styled-components';
import Query from "../components/global/Query"; 
import PAGE_QUERY from "../apollo/queries/page/page";
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';

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
            <p>Hello</p>
          );
        }
      }}
    </Query>
  );
};

export default Page; 