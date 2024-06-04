import 'react-native-gesture-handler'
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthStack from "./navigation/AuthStack";
import AppStack from "./navigation/AppStack";
import { AuthProvider } from './context/AuthContext';
import AppNavigation from './navigation/AppNavigation';


export default function App() {
  return (
    <AuthProvider>
      <AppNavigation/>
    </AuthProvider>
  );
}
