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
   BioSectionProps: TBioProps;
   AlbumsSectionProps: any;
   GallarySectionProps: any;
   ShopSectionProps: any;
   DateSectionProps: any;
};

export default function Home({
   BioSectionProps,
   AlbumsSectionProps,
   GallarySectionProps,
   ShopSectionProps,
   DateSectionProps,
}: THomeProps) {
   return (
      <ApolloProvider client={client}>
         <title>Official site of Sam Ostler</title>
         <meta
            name="description"
            content="Official site of Sam Ostler a singer and song writer form Redditchby Oscar Earle "
         />

         <meta property="og:url" content="https://sam-ostler.com" />
         <meta property="og:type" content="website" />
         <meta property="og:title" content="Official site of Sam Ostler" />
         <meta
            property="og:description"
            content="Official site of Sam Ostler a singer and song writer form Redditch created by Oscar Earle "
         />
         <meta property="og:image" content="" />

         <meta name="twitter:title" content="Official site of Sam Ostler" />
         <meta
            name="twitter:description"
            content="Official site of Sam Ostler a singer and song writer form Redditch by Oscar Earle"
         />
         <meta name="twitter:image" content="" />

         <Nav />
         <MobileNav />
         <HomeSection />
         <Bio {...BioSectionProps} />
         <Albums {...AlbumsSectionProps} />
         <Gallery {...GallarySectionProps} />
         <Shop {...ShopSectionProps} />

         <ContactAndDates {...DateSectionProps} />
         <Footer />
      </ApolloProvider>
   );
}

export async function getStaticProps() {
   const client = apolloClient();
   const res = await client.query({ query: GET_HOME_PAGE });

   const bioData = res?.data.bio;
   const aboutData = res?.data.about;
   const albumsData = res?.data.album;
   const gallaryData = res?.data.gallary;
   const shopData = res?.data.shop;
   const dateData = res?.data.event;

   return {
      props: {
         BioSectionProps: bioData,
         AlbumsSectionProps: albumsData,
         GallarySectionProps: gallaryData,
         ShopSectionProps: shopData,
         DateSectionProps: dateData,
      },
   };
}
