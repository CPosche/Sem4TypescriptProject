import gql from "graphql-tag";

export const getClasses = gql`
  query getClasses {
    classes {
      id
      name
      specs {
        name
        mainstat
        id
      }
      armortype
    }
  }
`;

export const getDungeons = gql`
  query getDungeons {
    dungeons {
      id
      image
    }
  }
`;

export const login = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      message
      status
    }
  }
`;
