import { gql } from "@apollo/client";

export const BIO_PAGE_FRAGMENT = gql`
  fragment bioPageProps on Bio {
    #these are my props dont forget 
    id
    image {
      url
    }
    text
    more
  }
`;

export const GET_BIO_PAGE = gql`
  query {
    bio {
      ...bioPageProps
    }
  }
  ${BIO_PAGE_FRAGMENT}
`;
