/* eslint-disable react/no-unescaped-entities */
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { TAboutSectionProps } from "./about-section.definition";
import * as S from "./about-section.style";

import { Text } from "../../components/text/text.component";
import { Buttons } from "../../components/buttons/buttons.component";
import colors from "../../configs/colors.json";
import { useContent } from "../../provider/content.provider";
import {
   LayoutWrapper,
   TitleWrapper,
} from "../../../styles/globalStyle-styles";
import { FileUploader } from "../../components/file-uploader/file-uploader.component";

export function AboutSection({ className, data }: TAboutSectionProps) {
   const {
      title,
      subTitle,
      mainContentTitle,
      mainContentTitleDescription,
      mainText,
      name,
      email,
      homeTown,
      cvDownloadUrl,
      imageUrl,
   } = data._data;
   const hiddenFileInput = useRef(null);

   const [titleValue, setTitleValue] = useState(title);
   const [titleDescriptionValue, setTitleDescriptionValue] = useState(subTitle);
   const [aboutMeTitleHeadline, setAboutMeTitleHeadline] =
      useState(mainContentTitle);
   const [aboutMeTitle, setAboutMeTitle] = useState(
      mainContentTitleDescription
   );
   const [_mainText, setMainText] = useState(mainText);
   const [_name, setName] = useState(name);
   const [_email, setEmail] = useState(email);
   const [placeOfWork, setPlaceOfWork] = useState(homeTown);
   const [cvUrl, setCvUrl] = useState(cvDownloadUrl);
   const [image, setImage] = useState(imageUrl);

   const { setAboutData, canEdit, saveData } = useContent();

   useEffect(() => {
      setAboutData({
         titleValue,
         titleDescriptionValue,
         aboutMeTitleHeadline,
         aboutMeTitle,
         _mainText,
         _name,
         _email,
         placeOfWork,
         cvUrl,
         aboutImg: image,
      });
   }, [saveData]);

   const openUploader = () => {
      // @ts-ignore
      hiddenFileInput.current?.click() as React.MutableRefObject<null>;
   };

   return (
      <S.AboutSectionDiv className={className}>
         <LayoutWrapper>
            <TitleWrapper>
               <Text
                  type="h2"
                  onChange={(evt: string) => setTitleValue(evt)}
                  width="100%"
               >
                  {titleValue}
               </Text>

               <Text
                  type="h3"
                  margin="-4px 0"
                  onChange={(evt: string) => setTitleDescriptionValue(evt)}
                  width="100%"
               >
                  {titleDescriptionValue}
               </Text>
            </TitleWrapper>

            <S.FlexLayout>
               <S.ImageWrapper>
                  <S.Image src={image} alt="image of oscar" />
                  {canEdit && (
                     <>
                        <S.Overlay id="overlay">
                           <Buttons
                              id="upload-edit-btn"
                              iconType="add-image"
                              type="icons-button"
                              onClick={openUploader}
                              className="upload-btn"
                           />
                        </S.Overlay>
                        <FileUploader
                           onChange={(evt) => {
                              setImage(evt);
                           }}
                           _ref={hiddenFileInput}
                        />
                     </>
                  )}
               </S.ImageWrapper>

               <S.AboutMeTextWrapper>
                  <Text
                     margin="0 "
                     onChange={(evt: string) => setAboutMeTitleHeadline(evt)}
                     color={colors.primary}
                     width="100%"
                     className="main-text-title"
                  >
                     {aboutMeTitleHeadline}
                  </Text>

                  <Text
                     margin="0"
                     onChange={(evt: string) => setAboutMeTitle(evt)}
                     width="100%"
                     className="main-text-subtitle"
                  >
                     {aboutMeTitle}
                  </Text>

                  <S.MainTextArea>
                     <Text
                        margin="7px 0"
                        onChange={(evt: string) => {
                           setMainText(evt);
                        }}
                        width="100%"
                        className="main-text"
                     >
                        {_mainText}
                     </Text>
                  </S.MainTextArea>
                  <S.LineBreak />
                  <S.TextHolder>
                     <Text
                        fontWeight="600"
                        padding="0 3px "
                        editable={false}
                        width="55px"
                        className="main-text"
                     >
                        Name:
                     </Text>
                     <Text
                        onChange={(evt: string) => setName(evt)}
                        width="200px"
                        className="main-text"
                     >
                        {_name}
                     </Text>
                  </S.TextHolder>

                  <S.TextHolder>
                     <Text
                        fontWeight="600"
                        padding="0 3px "
                        editable={false}
                        width="55px"
                        className="main-text"
                     >
                        Email:
                     </Text>
                     <Text
                        color={colors.primary}
                        onChange={(evt: string) => setEmail(evt)}
                        width="200px"
                        className="main-text"
                     >
                        {_email}
                     </Text>
                  </S.TextHolder>

                  <S.TextHolder>
                     <Text
                        fontWeight="600"
                        padding="0 3px "
                        editable={false}
                        width="55px"
                        className="main-text"
                     >
                        From:
                     </Text>
                     <Text
                        onChange={(evt: string) => setPlaceOfWork(evt)}
                        width="200px"
                        className="main-text"
                     >
                        {placeOfWork}
                     </Text>
                  </S.TextHolder>


                  <S.ButtonsWrapper>
                     <Buttons className="cv-btn">Download cv</Buttons>

                     <Buttons transparent={true} className="projects-btn">
                        Projects
                     </Buttons>

                     {canEdit && (
                        <S.CvUrlInput>
                           <S.CvInput
                              type="text"
                              placeholder="CV Url"
                              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                                 setCvUrl(evt.target.value)
                              }
                           />
                        </S.CvUrlInput>
                     )}
                  </S.ButtonsWrapper>
               </S.AboutMeTextWrapper>
            </S.FlexLayout>
         </LayoutWrapper>
      </S.AboutSectionDiv>
   );
}
