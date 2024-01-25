import React from "react";

import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";

import AppColors from "../theme/appColors";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      {/* Search Bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2 ">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">New York, NYC</Text>
          </View>
          <View
            style={{ backgroundColor: AppColors.orange }}
            className="p-3 rounded-full"
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
      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      ></ScrollView>
      {/* Categories */}
    </SafeAreaView>
  );
}
