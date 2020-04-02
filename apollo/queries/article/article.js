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
      content
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
    }
  }
`;

export default ARTICLE_QUERY;