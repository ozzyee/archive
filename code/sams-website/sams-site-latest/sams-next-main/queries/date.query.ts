import { gql } from "@apollo/client";

export const DATE_PAGE_FRAGMENT = gql`
  fragment datePageProps on Events {
    events {
      ... on ComponentDateDates {
        date
        buy_url
        location
      }
    }
  }
`;

export const GET_DATE_PAGE = gql`
  query {
    event {
      ...datePageProps
    }
  }
  ${DATE_PAGE_FRAGMENT}
`;
