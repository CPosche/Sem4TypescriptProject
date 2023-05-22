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

export const getItemsFromStatWeight = gql`
  mutation GetItemsFromStatWeight($calcData: calcDataInput) {
    getItemsFromStatWeight(calcData: $calcData) {
      Items {
        name
        preview_item {
          item_subclass {
            name
          }
          stats {
            value
            type {
              type
            }
          }
        }
      }
      dungeons
    }
  }
`;
