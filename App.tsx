import { onlineManager, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NetInfo from "@react-native-community/netinfo";
import BottomTabNavigator from "./src/navigation/TabNavigator";

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
