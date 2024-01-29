import React from "react";
import { FlatList } from "react-native";
import RecipeCard from "./recipeCard";

const recipes = [
  {
    id: "1",
    title: "Recipe1",
    description: "Recipe1 description",
    image: "https://picsum.photos/700",
  },
  {
    id: "2",
    title: "Recipe2",
    description: "Recipe2 description",
    image: "https://picsum.photos/700",
  },
  {
    id: "3",
    title: "Recipe3",
    description: "Recipe3 description",
    image: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg",
  },
];

export default function RecipesList() {
  return (
    <FlatList
      className="overflow-visible py-5 "
      data={recipes}
      renderItem={({ item }) => (
        <RecipeCard
          id={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      )}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingVertical: 10,
      }}
    />
  );
}
