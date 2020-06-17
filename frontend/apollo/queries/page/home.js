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
        ... on ComponentSectionHero {
          heroTitle: title
          image {
            alternativeText
            provider_metadata
          }
          backgroundImage {
            url
          }
          layout {
            color
            space
          }
          shapes {
            image {
              url
            }
            size
            position
            animation
          }
        }
        ... on ComponentSectionTextGrid {
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
        ... on ComponentSectionCustomersList {
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
        ... on ComponentSectionToolsList {
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
        ... on ComponentSectionTestimonialsSlider {
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