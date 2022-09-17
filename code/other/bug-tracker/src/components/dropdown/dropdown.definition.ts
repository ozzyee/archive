export type TDropdownProps = {
  className?: string;
  selectMany?: boolean;
  listID: string;
  width?: string;
  title: string;
  onClick: (e: MouseEvent) => void;
  options: TOption[];
  data: TListData[];
};

export type TOption = {
  id: string;
  value: string;
};

export type TListData = {
  name: string;
  tickets: TTicketData[];
};

export type TTicketData = {
  id: string;
  name: string;
  process: string;
};
