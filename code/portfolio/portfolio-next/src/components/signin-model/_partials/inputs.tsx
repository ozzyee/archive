import React, { useState } from "react";

import { TSignInInputsProps } from "../signin-model.definition";

import * as S from "../signin-model.style";

export function SignInInputs({
   children,
   id,
   onChange,
   type,
}: TSignInInputsProps) {
   const defaultLabelHeight = "34px";
   const defaultTextSize = "14px";
   const [labelHeight, setLabelHeight] = useState(defaultLabelHeight);
   const [textSize, setTextSize] = useState(defaultTextSize);

   const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e);
      setLabelHeight(e.target.value.length > 0 ? "10px" : defaultLabelHeight);
      setTextSize(e.target.value.length > 0 ? "12px" : defaultTextSize);
   };

   return (
      <S.InputWrapper>
         <S.Input id={id} type={type} onChange={onChangeHandler} />
         <S.Label
            htmlFor={id}
            height={labelHeight}
            textSize={textSize}
            className="form-label"
         >
            {children}
         </S.Label>
      </S.InputWrapper>
   );
}
