import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect } from "react";
import AppColors from "../theme/appColors";

const itemsList = [
  {
    name: "Pizza",
    image: "https://source.unsplash.com/featured/?pizza",
  },
  {
    name: "Burger",
    image: "https://source.unsplash.com/featured/?burger",
  },
  {
    name: "Sushi",
    image: "https://source.unsplash.com/featured/?sushi",
  },
  {
    name: "Desserts",
    image: "https://source.unsplash.com/featured/?desserts",
  },
  {
    name: "Drinks",
    image: "https://source.unsplash.com/featured/?drinks",
  },
];

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [categories, setCategories] = useState(itemsList);
  useEffect(() => {}, []);

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories?.map((category) => {
          let isActive = category._id == activeCategory;
          let btnClass = isActive ? " bg-gray-600" : " bg-gray-200";
          let textClass = isActive
            ? " font-semibold text-gray-800"
            : " text-gray-500";
          return (
            <View
              key={category._id}
              className="flex justify-center items-center mr-6"
            >
              <TouchableOpacity
                onPress={() => setActiveCategory(category._id)}
                className={"p-1 rounded-full shadow" + btnClass}
              >
                <Image style={{ width: 45, height: 45 }} source={{}} />
              </TouchableOpacity>
              <Text className={"text-sm " + textClass}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
