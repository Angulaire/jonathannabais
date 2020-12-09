import gql from "graphql-tag";

const PAGE_QUERY = gql`  
  query Page($slug: String!){
    pages(where: { slug: $slug} ) {
      id
      slug
      content {
        __typename
        ... on ComponentSectionHeroSideForm {
          title
          headline
          content
        }
      }
    }
  }
`;

export default PAGE_QUERY;