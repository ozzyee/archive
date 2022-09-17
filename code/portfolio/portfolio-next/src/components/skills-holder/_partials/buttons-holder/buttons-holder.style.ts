import styled from "styled-components";
import colors from "../../../../configs/colors.json";

export const ButtonsHolderDiv = styled("div")`
   #delete-btn {
      position: absolute;

      border: 2px solid transparent;

      top: 0;
      right: 0;

      display: flex;
      align-items: center;
      justify-content: top;
      flex-direction: column;

      margin-top: 5px;
      margin-right: 2px;
      background-color: transparent;

      svg {
         height: 32px;

         :hover {
            color: red;
         }

         :active {
            transform: scale(0.92);
         }
      }

      .delete-icon {
         height: 32px;

         :hover {
            color: red;
         }

         :active {
            transform: scale(0.92);
         }
      }
   }

   #add-btn {
      border: 2px solid transparent;
      position: absolute;

      top: 0;
      left: 0;

      display: flex;
      align-items: center;
      justify-content: top;
      flex-direction: column;
      background-color: transparent;
      svg {
         height: 22px;
         width: 22px;
         margin-top: 8px;
         margin-left: 2px;

         :hover {
            color: ${colors.primary};
         }

         :active {
            transform: scale(0.92);
         }
      }
   }
`;
