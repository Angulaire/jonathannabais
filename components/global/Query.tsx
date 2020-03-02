import React from 'react';
import { Row, Button } from 'antd';
import { useQuery } from "@apollo/react-hooks";

const Query = ({ children, query, id=null, slug=null }) => {
   
  const { data, loading, error } = useQuery(query, {
    variables: { id: parseInt(id), slug: slug }
  });

  if (loading) return (
    <Row type="flex" justify="center" align="middle" style={{height: "100vh"}}>
      <Button type="primary" size="large" loading>
        Chargement
      </Button>
    </Row>
  )
  if (error) return `Error! ${error.message}`;
  return children({ data });
};

export default Query;