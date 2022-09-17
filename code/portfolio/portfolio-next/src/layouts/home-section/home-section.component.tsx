import React, { useState } from "react";
import { THomeSectionProps } from "./home-section.definition";
import * as S from "./home-section.style";
import { Text } from "../../components/text/text.component";
import Typewriter from "typewriter-effect";

import Image from "next/image";

export function HomeSection({ className }: THomeSectionProps) {
   return (
      <>
         <S.HomeSectionDiv className={className}>
            <S.BackgroundImgHolder>
               <Image
                  src="/background_auto_x2.jpeg"
                  layout="fill"
                  className="bg-img"
                  priority
               />
               <S.ImageOverlay />
            </S.BackgroundImgHolder>

            <S.UsersNameAndImageWrapper>
               <S.UserNameAndImage>
                  <S.UserImageWrapper>
                     <S.UserImage src="img-of-me.jpeg" />
                  </S.UserImageWrapper>

                  <Text
                     type="h1"
                     margin="20px 0 0 0 "
                     padding="0px"
                     textAlign="center"
                     className="title"
                  >
                     OSCAR <span>EARLE</span>
                  </Text>

                  <S.TextWrapper>
                     <Text
                        color="white"
                        fontWeight="normal"
                        padding="0px"
                        margin="0 10px "
                        fontSize="1.35rem"
                        className="typing-txt"
                     >
                        Im a
                     </Text>
                     <div id="type-weighter-text">
                        <Typewriter
                           options={{
                              strings: [
                                 "Javascript Developer",
                                 "React Developer",
                                 "Backend Developer",
                                 "Fullstack Developer",
                              ],
                              autoStart: true,
                              loop: true,
                              delay: 200,
                           }}
                        />
                     </div>
                  </S.TextWrapper>
               </S.UserNameAndImage>
            </S.UsersNameAndImageWrapper>
         </S.HomeSectionDiv>
      </>
   );
}
