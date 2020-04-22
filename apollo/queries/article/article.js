import gql from "graphql-tag";

const ARTICLE_QUERY = gql`  
  query Article($slug: String!) {
    navigation {
      navbar
      footer
    }
    articles(where: {slug: $slug}) {
      id
      slug
      title
      description
      published_at
      category {
        name
        color
      }
      user {
        username
        avatar {
          alt
          media {
            url
          }
        }
      }
      content {
        ... on ComponentSectionRichText {
          body
        }
      }
    }
  }
`;

export default ARTICLE_QUERY;