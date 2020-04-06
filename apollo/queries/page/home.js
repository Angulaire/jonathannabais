import gql from "graphql-tag";

const HOME_QUERY = gql`  
  query Home {
    navigation {
      navbar
      footer
    }
    home{
      content {
        __typename
        ... on ComponentHero {
          heroTitle: title
          image {
            url
            provider_metadata
          }
          layout {
            color
            space
          }
        }
        ... on ComponentTextGrid {
          title
          textCard {
            title
            description
            number
          }
          layout {
            color
            space
          }
          shapes {
            size
            position
            image {
              url
            }
          }
        }
        ... on ComponentCustomersList {
          title
          customer {
            logo {
              url
            }
          }
          layout {
            color
            space
          }
        }
        ... on ComponentToolsList {
          title
          tool {
            name
            logo {
              url
            }
          }
          layout {
            color
            space
          }
        }
        ... on ComponentCta {
          id
          ctaTitle: title
          button {
            text
            type
            href
          }
          layout {
            color
            space
          }
          shape {
            image {
              url
            }
            position
            size
          }
        }
        ... on ComponentTestimonialsSlider {
          testimonials {
            name
            avatar {
              url
            }
            testimonial
            compagnyName
            compagnyColor
            compagnyLogo {
              url
            }
            icon {
              url
            }
          }
          layout {
            color
            space
          }
        }
      }
    }
  }
`;

export default HOME_QUERY;