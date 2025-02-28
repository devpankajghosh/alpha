import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const Partner = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Partner {id}</Text>
    </View>
  );
};

export default Partner;
