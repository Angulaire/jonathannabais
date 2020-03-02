import gql from "graphql-tag";

const ARTICLE_QUERY = gql`  
  query Article($slug: String!) {
    articles(where: {slug: $slug}) {
      id
      slug
      title
      description
      published_at
      image {
        alt
        media {
          provider_metadata
          ext
        }
      }
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