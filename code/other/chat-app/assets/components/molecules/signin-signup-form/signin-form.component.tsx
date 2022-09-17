import React, { useEffect, useState } from "react";
import { Button } from "../../atoms/button/button.component";
import { Inputs } from "../../atoms/inputs/inputs.component";
import { TSigninFormProps } from "./signin-form.definition";
import * as S from "./signin-form.style";
import { Text } from "react-native";
import { Snackbar } from "react-native-paper";
import { useAuth } from "../../../auth/auth.provider";

export function SigninSignupForm({ signup }: TSigninFormProps) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [show, setShow] = useState(false);
   const [_error, setError] = useState(false);
   const [showErr, setShowErr] = useState(false);
   const [errMsg, setErrMsg] = useState("");
   const { signUpFunc, signInFunc } = useAuth();

   const showPassword = () => {
      show ? setShow(false) : setShow(true);
   };

   useEffect(() => {
      if (password == confirmPassword) {
         setError(false);
         setShowErr(false);
      }
   }, [password, confirmPassword]);

   const regFunction = async () => {
      if (signup && password !== confirmPassword) {
         setErrMsg("Passwords don't match");
         setError(true);
         setShowErr(true);
      } else {
         try {
            await signUpFunc({ email, password });
         } catch (err) {
            const error = err as Error;
            setError(true);
            setShowErr(true);
            setErrMsg(error.message);
         }
      }
   };

   const login = async () => {
      try {
         await signInFunc({ email, password });
      } catch (err) {
         const error = err as Error;
         setError(true);
         setShowErr(true);
         setErrMsg(error.message);
      }
   };

   return (
      <>
         <Snackbar
            visible={showErr}
            onDismiss={() => {}}
            action={{
               label: "close",
               onPress: () => setShowErr(false),
            }}
            style={{
               backgroundColor: "#D84547",
               zIndex: 10000,
               position: "absolute",
               bottom: "20%",
            }}
            theme={{
               colors: {
                  accent: "#ffffff",
               },
            }}
         >
            {errMsg}
         </Snackbar>

         <S.SigninFormView>
            <Inputs
               placeholder="Email"
               onChangeText={(text) => setEmail(text)}
               showState={true}
               incorrect={_error}
            />
            <Inputs
               placeholder="Password"
               onChangeText={(text) => setPassword(text)}
               password={true}
               showPassword={showPassword}
               showState={show}
               incorrect={_error}
            />
            {signup && (
               <Inputs
                  placeholder="Confirm Password"
                  onChangeText={(text) => setConfirmPassword(text)}
                  password={true}
                  showPassword={showPassword}
                  showState={show}
                  incorrect={_error}
               />
            )}

            <Button onClick={signup ? regFunction : login}>
               {signup ? "Signup" : "Signin"}
            </Button>
            {!signup && (
               <Text
                  style={{
                     marginTop: 20,
                     textAlign: "center",
                     fontWeight: "bold",
                     color: "#6ABAE5",
                  }}
               >
                  Forget Password
               </Text>
            )}
         </S.SigninFormView>
      </>
   );
}
