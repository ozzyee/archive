import { TUserObject } from "../../provider/auth.provider";

export type TSearchFriendsProps = {
  className?: string;
  openSearchList: string;
  allUsersSearch: SearchType[];
  currentUserId: string | undefined;
  usersFriendsList: any;
  user: TUserObject;
  loading: boolean;
};

export type SearchType = {
  email: string;
  firstName: string;
  lastName: string;
  oauth: boolean;
  userID: string;
  image: string;
};
