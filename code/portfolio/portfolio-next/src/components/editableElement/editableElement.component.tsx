import React, { useEffect, useRef, useState } from "react";
import { TEditableElementProps } from "./editableElement.definition";

export const EditableElement = (props: TEditableElementProps) => {
   const { onChange } = props;
   const element = useRef<any>();
   let elements: any = React.Children.toArray(props.children);

   if (elements.length > 1) {
      throw Error("Can't have more than one child");
   }
   const onMouseUp = (event: any) => {
      if (!element) return null;
      const value = element.current?.value || element.current?.innerText;
      if (onChange) {
         onChange(value);
      }
   };
   useEffect(() => {
      const value = element.current?.value || element.current?.innerText;
      if (onChange) {
         onChange(value);
      }
   });

   elements = React.cloneElement(elements[0], {
      contentEditable: props.canEdit,
      suppressContentEditableWarning: true,
      ref: element,
      onKeyUp: onMouseUp,
   });
   return elements;
};
