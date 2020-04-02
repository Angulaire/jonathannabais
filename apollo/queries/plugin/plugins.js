import gql from "graphql-tag";

const PLUGINS_QUERY = gql`  
  query Plugins {
    plugin {
      gtm {
        gtmId
      }
    }
  }
`;

export default PLUGINS_QUERY;