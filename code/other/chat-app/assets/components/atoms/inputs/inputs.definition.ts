import {
   GestureResponderEvent,
   NativeSyntheticEvent,
   TextInputChangeEventData,
} from "react-native";

export type TInputsProps = {
   placeholder: string;
   onChangeText?: ((text: string) => void) | undefined;
   password?: boolean;
   signup?: any;
   showPassword?: ((event: GestureResponderEvent) => void) | undefined;
   showState?: boolean;
   incorrect?: boolean;
};
