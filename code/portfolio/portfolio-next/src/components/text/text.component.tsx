import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { useContent } from "../../provider/content.provider";
import { EditableElement } from "../editableElement/editableElement.component";
import { TTextProps } from "./text.definition";
import * as S from "./text.style";

export function Text({
   children,
   color,
   onChange,
   fontSize,
   type,
   margin,
   padding,
   fontWeight,
   editable,
   width,
   height,
   className,
}: TTextProps) {
   const { canEdit } = useContent();
   const [text] = useState(children);
   const [editableComponent, setEditableComponent] = useState<
      boolean | undefined
   >(false);

   useEffect(() => {
      if (canEdit) {
         setEditableComponent(true);
         if (editable !== undefined) {
            setEditableComponent(editable);
         }
      }
   }, [editable, canEdit]);

   const theme = {
      color: color ? color : "black",
      fontSize: fontSize,
      margin,
      padding,
      fontWeight,
      width,
      height,
   };

   if (type == "h1") {
      return (
         <ThemeProvider theme={theme}>
            <S.Header className={className}>{text}</S.Header>
         </ThemeProvider>
      );
   }

   if (type == "h2") {
      return (
         <ThemeProvider theme={theme}>
            <EditableElement onChange={onChange} canEdit={editableComponent}>
               <S.SubHeader className={className}>{text}</S.SubHeader>
            </EditableElement>
         </ThemeProvider>
      );
   }

   if (type == "h3") {
      return (
         <ThemeProvider theme={theme}>
            <EditableElement onChange={onChange} canEdit={editableComponent}>
               <S.ContentHeader className={className}>{text}</S.ContentHeader>
            </EditableElement>
         </ThemeProvider>
      );
   }

   return (
      <ThemeProvider theme={theme}>
         <EditableElement onChange={onChange} canEdit={editableComponent}>
            <S.Custom className={className}>{text}</S.Custom>
         </EditableElement>
      </ThemeProvider>
   );
}
