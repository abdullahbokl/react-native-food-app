import React from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function RecipeCard({ id, title, imgUrl, description }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Resturant", {
          id,
          title,
          imgUrl,
          description: "description",
        });
      }}
    >
      <View className="mx-1 mb-4 rounded-3xl shadow-md shadow-black flex flex-row bg-white ">
        {/* Leading Image */}
        <Image
          className="h-full w-1/3 rounded-l-3xl"
          source={{ uri: imgUrl }}
        />
        {/* Content Title and Desc */}
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{title}</Text>
          <Text className="text-sm text-gray-500">{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
