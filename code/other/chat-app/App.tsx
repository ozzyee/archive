import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { AuthProvider } from "./assets/auth/auth.provider";
import { Router } from "./assets/navigation/router";

export default function App() {
   return (
      <AuthProvider>
         <Router />
      </AuthProvider>
   );
}
