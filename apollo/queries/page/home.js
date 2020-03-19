import gql from "graphql-tag";

const HOME_QUERY = gql`  
  query Home {
    home{
      content {
        __typename
        ... on ComponentHero {
          heroTitle: title
          image {
            url
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