import styled from "styled-components/native";

type TText = {
   fontSize: string;
   colors: string;
   fontWeight: string;
   spacing: string;
};

export const Text = styled.Text<TText>`
   font-size: ${({ fontSize }) => fontSize};
   color: ${({ colors }) => colors};
   font-weight: ${({ fontWeight }) => fontWeight};
   padding: ${({ spacing }) => spacing};
`;
