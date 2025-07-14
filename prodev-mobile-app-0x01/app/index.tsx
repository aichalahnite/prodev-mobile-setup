import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#90caf9",
  },
  largeText: {
    fontSize: 30,
    color: "#f44336",
    marginBottom: 5,
    fontWeight: "700",
    fontVariant: ["small-caps"],
  },
  mediumText: {
    fontSize: 20,
    color: "#9c27b0",
    marginBottom: 10,
    fontWeight: "500",
    textAlign: "right",
  },
  smallText: {
    fontSize: 15,
    color: "#2196f3",
    fontWeight: "400",
    textAlign: "center",
  },
});

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <Text className="text-3xl font-bold text-purple-600">Welcome to My App</Text>
      <TouchableOpacity className="mt-4 px-6 py-2 bg-blue-500 rounded-full">
        <Text className="text-white">Click Me</Text>
      </TouchableOpacity>
    </View>
  );
}
