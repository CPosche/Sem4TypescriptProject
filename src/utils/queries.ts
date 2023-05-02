import gql from "graphql-tag";

export const getClasses = gql`
  query getClasses {
    classes {
      id
      name
      specs {
        name
        mainstat
      }
      armortype
    }
  }
`;
