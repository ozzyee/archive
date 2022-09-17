import type { NextApiRequest, NextApiResponse } from "next";
import React from "react";
import { firebaseAdmin } from "../lib/firebase/firebase.admin";

import { HomeSection } from "../layouts/home-section/home-section.component";
import { AboutSection } from "../layouts/about-section/about-section.component";
import { SectionHolder } from "../../styles/globalStyle-styles";
import { SkillsSection } from "../layouts/skills-section/skills-section.component";
import { ProjectsSection } from "../layouts/projects-section/projects-section.component";
import { useContent } from "../provider/content.provider";
import { getAboutData } from "../data/about/get-about-data";
import { TProps } from "../types/index.types";
import { getSkillsData } from "../data/skills/get-skills-data";

const Home = ({ access, aboutSectionData, skillsSectionData }: TProps) => {
   const { setCanEdit } = useContent();
   setCanEdit(access);
   // setCanEdit(true);

   return (
      <>
         <SectionHolder>
            <HomeSection />
            <AboutSection data={aboutSectionData} />
            <SkillsSection data={skillsSectionData} />
            <ProjectsSection />
         </SectionHolder>
      </>
   );
};

export async function getServerSideProps({
   req,
   res,
}: {
   req: NextApiRequest;
   res: NextApiResponse;
}) {
   const { aboutSectionData } = await getAboutData();
   const { skillsSectionData } = await getSkillsData();

   const unauthorizedReturn = {
      props: {
         access: false,
         aboutSectionData,
         skillsSectionData,
      },
   };

   try {
      const { uid } = await firebaseAdmin
         .auth()
         .verifyIdToken(req.cookies.token);

      if (!uid) {
         return unauthorizedReturn;
      }

      return {
         props: {
            access: true,
            aboutSectionData,
            skillsSectionData,
         },
      };
   } catch (err) {
      return unauthorizedReturn;
   }
}

export default Home;
