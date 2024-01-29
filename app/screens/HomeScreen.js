import React, { useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import Categories from "../components/categories";
import ApiServices from "../services/apiService";
import SearchBar from "../components/searchBar";
import RecipesList from "../components/recipesList";

export default function HomeScreen() {
  useEffect(() => {
    ApiServices.getRandomRecipes({ limit: 5 }).then((data) => {
      const recipes = data?.data?.recipes;
      console.log(recipes);
    });
  }, []);

  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      {/* Search Bar */}
      <SearchBar />

      {/* Categories */}
      <Categories />

      {/* Recipes By Category */}
      <RecipesList />
    </SafeAreaView>
  );
}
