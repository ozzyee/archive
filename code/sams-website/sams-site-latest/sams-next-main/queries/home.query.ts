import { gql } from "@apollo/client";
import { ALBUMS_PAGE_FRAGMENT } from "./albums.query";
import { BIO_PAGE_FRAGMENT } from "./bio.query";
import { DATE_PAGE_FRAGMENT } from "./date.query";
import { GALLARY_PAGE_FRAGMENT } from "./gallary.query";
import { SHOP_PAGE_FRAGMENT } from "./shop.query";

export const GET_HOME_PAGE = gql`
  query HomePage {
    bio {
      ...bioPageProps
    }

    album {
      ...albumsPageProps
    }

    gallary {
      ...gallaryPageProps
    }

    shop {
      ...shopPageProps
    }

    event {
      ...datePageProps
    }
  }
  ${BIO_PAGE_FRAGMENT}
  ${ALBUMS_PAGE_FRAGMENT}
  ${GALLARY_PAGE_FRAGMENT}
  ${SHOP_PAGE_FRAGMENT}
  ${DATE_PAGE_FRAGMENT}

`;
