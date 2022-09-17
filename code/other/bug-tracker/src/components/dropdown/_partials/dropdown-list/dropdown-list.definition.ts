import { ChangeEvent, MouseEvent } from "react";

export type TDropdownListProps = {
   className?: string;
   listHeight: number;
   data: any;
   inputType: boolean;
   checkedItems: (event?: MouseEvent | ChangeEvent) => void;
   selectedItems: (event?: MouseEvent | ChangeEvent) => void;
   list: any;
   deselected: string;
   selectMany?: boolean;
};
