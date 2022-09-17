//apollo
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

import React from "react";
import { Albums } from "../components/albums/albums.component";
import { Bio } from "../components/bio/bio.component";
import { TBioProps } from "../components/bio/bio.definition";
import { ContactAndDates } from "../components/contact-and-dates/contact-and-dates.component";
import { Shop } from "../components/shop/shop.component";
import { GET_HOME_PAGE } from "../queries/home.query";
import { HomeSection } from "../components/home/home.component";
import { Gallery } from "../components/gallary/gallary.component";
import { Nav } from "../components/nav/nav.component";
import { MobileNav } from "../components/mobile-nav/mobile-nav.component";
import { GallaryPage } from "../components/gallary-page/gallary-page.component";
import { SectionHeader } from "../components/section-header/section-header.component";
import { Button } from "../components/button/button.component";
import Link from "next/link";
import { Footer } from "../components/footer/footer.component";

export function apolloClient() {
  const client = new ApolloClient({
    uri: "https://sam-latest.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });

  return client;
}

const client = apolloClient();

//sections of the page

export type THomeProps = {
  GallarySectionProps: any;
};

export default function Gallary({ GallarySectionProps }: THomeProps) {
  return (
    <ApolloProvider client={client}>
      <div className="button__back">
        <Link href="/">
          <Button color="white">back</Button>
        </Link>
      </div>
      <SectionHeader>Gallery</SectionHeader>

      <div className="padding__bottom">
        <GallaryPage {...GallarySectionProps} />
      </div>
      <Footer />
    </ApolloProvider>
  );
}

export async function getStaticProps() {
  const client = apolloClient();
  const res = await client.query({ query: GET_HOME_PAGE });

  const gallaryData = res?.data.gallary;

  return {
    props: {
      GallarySectionProps: gallaryData,
    },
  };
}
