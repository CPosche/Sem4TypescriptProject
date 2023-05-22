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
        image
        preview_item {
          inventory_type {
            name
            type
          }
          item_subclass {
            id
            name
          }
          level {
            display_string
            value
          }
          stats {
            display {
              color {
                a
                b
                g
                r
              }
              display_string
            }
            type {
              name
              type
            }
            value
          }
        }
      }
      dungeons
    }
  }
`;
