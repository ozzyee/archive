import { gql } from "@apollo/client";

export const ALBUMS_PAGE_FRAGMENT = gql`
fragment albumsPageProps on Album {
  ... on Album {
    album {
      ... on ComponentAlbumAlbum {
        url
        cover {
          url
        }
      }
    }
  }
}
`;

export const GET_ALBUMS_PAGE = gql`
  query {
    album {
      ...albumsPageProps
    }
  }
  ${ALBUMS_PAGE_FRAGMENT}
`;
