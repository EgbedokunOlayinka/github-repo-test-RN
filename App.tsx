import { onlineManager, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import BottomTabNavigator from "./src/navigation/TabNavigator";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";

const queryClient = new QueryClient();

onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(!!state.isConnected);
  });
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BottomTabNavigator />
    </QueryClientProvider>
  );
}
