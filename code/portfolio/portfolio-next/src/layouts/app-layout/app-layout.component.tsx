import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { Navigation } from "../../components/navigation/navigation.component";
import { useContent } from "../../provider/content.provider";

import { TAppLayoutProps } from "./app-layout.definition";
import * as S from "./app-layout.style";
import { LogoutAndSaveModal } from "../../components/logout-and-save-modal/logout-and-save-modal.component";

export function AppLayout({ className, children }: TAppLayoutProps) {
   const router = useRouter();
   const { canEdit, saveData } = useContent();

   const notLoinScreen = router.route !== "/login";

   useEffect(() => {
      if (saveData) document.body.style.overflow = "hidden";
   }, [saveData]);

   return (
      <>
         <S.AppLayoutDiv className={className}>
            {saveData && <LogoutAndSaveModal />}
            {notLoinScreen && <Navigation />}
            {children}
         </S.AppLayoutDiv>
      </>
   );
}
