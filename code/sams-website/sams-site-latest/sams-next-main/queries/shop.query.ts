import { gql } from "@apollo/client";

export const SHOP_PAGE_FRAGMENT = gql`
  fragment shopPageProps on Shop {
    product {
      ... on ComponentShopProduct {
        price
        url
        name
        image {
          url
        }
      }
    }
  }
`;

export const GET_SHOP_PAGE = gql`
  query {
    shop {
      ...shopPageProps
    }
  }
  ${SHOP_PAGE_FRAGMENT}
`;
