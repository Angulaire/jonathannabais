import gql from "graphql-tag";

const JOB_QUERY = gql`  
  query Job($id: ID!) {
    jobs(where: { key_id: $id} ) {
      id
      key_id
      published_at
      updated_at
      reference
      title
      compagny_name
      agence_id
      compagny_description
      secteur_metier_interim
      description
      applicant_profile
      function
      industry
      location_administrativearea
      location_subadministrativearea
      location_town
      type
      contract
      application_email
    }
  }
`;

export default JOB_QUERY;