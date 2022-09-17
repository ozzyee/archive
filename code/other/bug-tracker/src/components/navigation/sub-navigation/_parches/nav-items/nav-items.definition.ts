export type TNavItemsProps = {
  className?: string;
  active?: boolean;
  children: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  dataSet: string;
  linkType?: string;
};
