export type TDropdownHeaderProps = {
  showList: (id: string) => void;
  icon: string;
  list: string[];
  closeIcon: (e: MouseEvent) => void;
  title: string;
  selectMany?: boolean;
  listID: string;
};
