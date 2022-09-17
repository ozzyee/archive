import React from "react";
import { TIconsProps } from "./icons.definition";
import * as S from "./icons.style";

//* ICONS
import { ImageAdd } from "@styled-icons/boxicons-regular/ImageAdd";
import { Delete } from "@styled-icons/fluentui-system-regular/Delete";
import { Add } from "@styled-icons/fluentui-system-filled/Add";

export function Icons({ className, type }: TIconsProps) {
   if (type == "delete") return <Delete />;

   if (type == "add") return <Add />;

   if (type == "add-image") return <ImageAdd />;

   return null;
}
