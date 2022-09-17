import { colors } from "../../../styles/colors";
import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
   background-color: ${colors.primary};
   height: 40px;
   margin-top: 60px;
   width: 80%;
   margin-left: auto;
   margin-right: auto;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 11px;
`;

export const ButtonText = styled.Text`
   color: white;
   font-size: 18px;
`;
