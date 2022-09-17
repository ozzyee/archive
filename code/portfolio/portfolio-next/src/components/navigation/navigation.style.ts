import styled from "styled-components";
import Colors from "../../configs/colors.json";

export const NavigationDiv = styled("nav")`
   display: none;
   @media (min-width: 1000px) {
      width: 15vw;
      height: 100%;
      position: fixed;
      background-color: #133056;
      display: flex;
      align-items: center;
   }
`;

export const UserImage = styled("div")`
   width: 40px;
   height: 100%;

   display: flex;
   align-items: center;
   justify-content: center;
   padding: 0 10px;
`;

export const LoggedInUserModalWrapper = styled("div")`
   position: absolute;
   top: 4px;
   left: 4px;
   width: 100%;
   height: 60px;

   display: flex;
   align-items: center;
`;

export const Img = styled("img")`
   width: 80%;
   border-radius: 50%;
`;

export const UserName = styled("div")`
   color: white;
`;

export const List = styled("ul")`
   list-style: none;
   padding: 0;
   width: 100%;

   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`;

export const ListItem = styled("li")`
   margin-top: 12px;
   margin-bottom: 12px;
   color: white;
   width: 100px;
   cursor: pointer;
   transition: all 100ms;

   :hover {
      color: ${Colors.primary};
   }

   :active {
      transform: scale(0.95);
   }
`;

export const SignOutButton = styled("button")`
   position: absolute;
   bottom: 0;

   height: 35px;
   width: 100%;
   background: transparent;
   color: white;

   display: flex;
   align-items: center;
   justify-content: center;
   border-color: transparent;
   border: 1px solid true;

   transition: all 100ms;

   #sign-out-icon {
      width: 20px;
      position: absolute;
      left: 15px;
   }

   :hover {
      background-color: #e56b6f;
   }

   :active {
      #sign-out-icon {
         transform: scale(0.95);
      }

      p {
         transform: scale(0.98);
      }
   }
`;

export const ButtonText = styled("p")``;
