import styled from "@emotion/styled-base";
import Colors from "../../configs/colors.json";

export const LoadingImage = styled("div")`
  border: 2px solid red;
  height: 35px;
  width: 35px;
  border-radius: 20px;


`;

export const FriendsWidgetDiv = styled("div")`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: 52px;
  display: flex;
  border-radius: 22px;
  border: 2px solid transparent;
  transition: border 100ms;
  margin-bottom: 10px;

  :hover {
    border-color: ${Colors.primary};
  }
`;

export const CenterContent = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  z-index: 1;
`;

export const UsersImageWrapper = styled("div")`
  height: 100%;
  margin-left: -5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UsersImage = styled("img")`
  height: 35px;
  width: 35px;
  border-radius: 20px;
`;

export const UsersNameWrapper = styled("div")`
  width: 75%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${Colors.primary};
`;

export const UsersName = styled("p")`
  margin-top: 0;
  margin-bottom: 0;
  width: 100%;
  padding-left: 15px;
  font-size: 16px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Friends = styled("p")`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 13px;
  text-align: left;
  width: 100%;
  padding-left: 15px;
  color: #56a8fd;
`;

export const AddBtnWrapper = styled("div")`
  position: absolute;
  width: 22px;
  right: 10px;
  color: ${Colors.primary};

  :active {
    transform: scale(0.9);
  }
`;
