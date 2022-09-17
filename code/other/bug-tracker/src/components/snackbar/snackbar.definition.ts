export type TSnackbarProps = {
  className?: string;
  alert: string;
  msg: string;
  closeFunction: () => void;
  close: boolean;
  closable: boolean;
};
