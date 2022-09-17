import styled from "styled-components/native";
import { colors } from "../../../styles/colors";
export const InputsView = styled.TextInput`
   border-bottom-width: 2px;
   border-color: ${({ borderColor }: { borderColor: string }) => borderColor};
   height: 46px;
   margin-top: 20%;
   padding-left: 10px;
   width: 100%;
`;
