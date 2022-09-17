import styled from "styled-components";
import colors from "../../../configs/colors.json";

export const InboxLayoutDiv = styled("div")`
  width: 100%;
  height: 290px;
`;

export const TitleWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const MessageWrapper = styled("div")`
  height: 200px;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 20px;
`;

export const ComposeBtnHolder = styled("div")`
  position: absolute;
  right: 20px;
  height: 30px;
  width: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  .compose-icon {
    width: 24px;
    height: 24px;
    color: ${colors.primary};

    :active {
      transform: scale(0.92);
    }
  }
`;
