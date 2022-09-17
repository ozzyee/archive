import styled from "styled-components";
import Colors from "../../../configs/colors.json";
import Fonts from "../../../configs/fonts.json";

export const ProjectImageUploaderDiv = styled("div")`
   width: 900px;
   border: 2px solid black;
   height: 200px;
`;

export const TittleHolder = styled("div")`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 5px;
`;

export const Title = styled("p")`
   margin: 0;
   color: ${Colors.primary};
   font-family: ${Fonts.primary};
   font-size: 18px;
`;

export const ImageUploadedWrapper = styled("div")`
   border-top: 2px solid ${Colors.primary};
   height: 75%;
   margin: 10px;
   overflow: scroll;
`;

export const ImageUploaderIcon = styled("div")`
   border: 2px solid ${Colors.primary};
   width: 120px;
   height: 120px;
   margin: 10px;
   border-radius: 20px;
   color: ${Colors.primary};
   padding: 14px;

   &:active {
      transform: scale(0.95);
   }
`;
