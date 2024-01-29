import React from "react";
import { View, Text, TextInput } from "react-native";
import * as Icon from "react-native-feather";
import AppColors from "../theme/appColors";

export default function SearchBar() {
  return (
    <View className="flex-row items-center space-x-2 px-4 pb-2 mt-5">
      <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
        <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
        <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
          <Icon.MapPin height="20" width="20" stroke="gray" />
          <Text className="text-gray-600">New York, NYC</Text>
        </View>
        <View
          style={{ backgroundColor: AppColors.orange }}
          className="p-3 rounded-full ml-2"
        >
          <Icon.Sliders
            height={20}
            width={20}
            strokeWidth="2.5"
            stroke="white"
          />
        </View>
      </View>
    </View>
  );
}
