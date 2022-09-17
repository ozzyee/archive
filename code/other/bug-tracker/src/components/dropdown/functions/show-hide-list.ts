export const showHideDropdownList = (e: any, open: boolean, listID: string) => {


   const list = document.getElementById("list");
   const listHeight: number = list?.offsetHeight || 0;
   const closeTarget = e?.target?.id;

   let dropDownPosition;

   //* This checks if "closeTarget" witch is the target id is equal to "close-dropdown" if so this block is fired
   if (closeTarget == listID || closeTarget == listID + "title") {
      //* this makes sure that the var Open is true this block is then fired
      if (open) {
         //* This is setting all of the state for the components and stores it in this variable
         dropDownPosition = {
            dropdownHeight: 0,
            dropdownOpen: false,
            arrowIcon: "arrowDown",
         };
      } else {
         if (listHeight) {
            dropDownPosition = {
               dropdownHeight: listHeight + 20,
               dropdownOpen: true,
               arrowIcon: "arrowUp",
            };
         }
      }
   }

   return dropDownPosition;
};
