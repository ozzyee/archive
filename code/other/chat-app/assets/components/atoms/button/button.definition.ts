import { GestureResponderEvent } from "react-native";

export type TButtonProps = {
   children: string;
   onClick?: ((event: GestureResponderEvent) => void) | undefined;
};
