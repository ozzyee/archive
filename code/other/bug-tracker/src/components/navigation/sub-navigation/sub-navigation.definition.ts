export type TSubNavigationProps = {
  className?: string;
  data: TSubNavData[];
  typeOfNav?: string;
  onClick?: () => void;
  onChange?: (target: string) => void | undefined;
};

export type TSubNavData = {
  id: string;
  name: string;
};
