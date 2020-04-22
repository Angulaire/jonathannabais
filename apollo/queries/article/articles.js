import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    navigation {
      navbar
      footer
    }
    blog {
      content {
        __typename
        ...on ComponentSectionHero { 
          image {
            provider_metadata
            alternativeText
          }
          backgroundImage {
            url
          }
          title
          layout {
            color
            space
          }
        }
        ... on ComponentSectionBlogGrid { 
        	layout {
            color
            space
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
    articles(sort: "published_at:desc") {
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

export default ARTICLES_QUERY;