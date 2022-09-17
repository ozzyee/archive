import styled from 'styled-components';
import Colors from '../../configs/colors.json';
import fontFamily from '../../configs/fonts.json';

export const FontDiv = styled('div')`
  color: ${Colors.primary};
  cursor: default;
  font-family: ${fontFamily.primary};
  text-align: center;
  font-size: 23px;
`;

export const HeaderFont = styled('h1')`
  color: ${Colors.primary};
  font-size: 20px;
  font-weight: normal;
  margin-bottom: 0;
  margin-top: 0;
  cursor: default;
  font-family: ${fontFamily.primary};
`;
