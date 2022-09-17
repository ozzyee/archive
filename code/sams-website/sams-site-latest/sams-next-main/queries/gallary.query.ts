import { gql } from "@apollo/client";

export const GALLARY_PAGE_FRAGMENT = gql`
  fragment gallaryPageProps on Gallary {
    image {
      ... on ComponentAlbumImage {
        image {
          url
          id
        }
      }
    }
  }
`;

export const GET_GALLARY_PAGE = gql`
  query {
    gallary {
      ...gallaryPageProps
    }
  }
  ${GALLARY_PAGE_FRAGMENT}
`;
