import styled from "styled-components";
import Colors from "../../configs/colors.json";
import Font from "../../configs/fonts.json";

export const ProjectThumbnailDiv = styled("div")`
   width: 187px;
   height: 175px;
   margin: 5px;

   position: relative;
   float: left;
`;

export const ProjectContents = styled("div")`
   width: 100%;
   height: 180px;

   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`;

export const ProjectImage = styled("div")`
   height: 120px;
   width: 90%;
   padding: 10px;

   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 20px;

   border: 2px solid green;

   img {
      width: 100%;
      height: 100%;
      border: 2px solid red;
      object-fit: scale-down;
   }
`;

export const TitleHolder = styled("div")`
   width: 80%;
   max-height: 50px;
`;

export const Title = styled("p")`
   font-family: ${Font.primary};
   color: ${Colors.primary};
   text-align: center;
   font-size: 14px;
   margin: 0 auto;
   margin-bottom: 10px;
`;
