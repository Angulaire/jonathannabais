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
        bio
        avatar {
          provider_metadata
          alternativeText
        }
      }
      content {
        __typename
        ... on ComponentSectionRichText {
          body
          signature
        }
        ... on ComponentSectionRelatedArticles {
          layout {
            color
            space
          }
          collection {
            articles {
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
              }
              content {
                ... on ComponentSectionRichText {
                  body
                }
              }
            }
          }
        }
        ... on ComponentSectionCta {
          id
          cta {
            ctaTitle: title
            buttons {
              text
              type
              href
            }
            layout {
              color
              space
            }
            shapes {
              image {
                url
              }
              position
              size
            }
          }
        }
      }
    }
  }
`;

export default ARTICLE_QUERY;