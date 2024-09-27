import { View, Text } from "react-native";
import React from "react";
import MeditationCard from "../Components/MeditationCard";
import { FlatList } from "react-native";
const img1 = require("../../assets/meditation-images/beach.webp");
const img2 = require("../../assets/meditation-images/meditate-under-tree.webp");
const img3 = require("../../assets/meditation-images/river.webp");
const img4 = require("../../assets/meditation-images/trees.webp");
const img5 = require("../../assets/meditation-images/waterfall.webp");
const img6 = require("../../assets/meditation-images/yosemite-stars.webp");

const Lists = [
  {
    img: img1,
    text: "Beach",
  },
  {
    img: img2,
    text: "Under Tree",
  },
  {
    img: img3,
    text: "River",
  },
  {
    img: img4,
    text: "Tree",
  },
  {
    img: img5,
    text: "Waterfall",
  },
  {
    img: img6,
    text: "Stars",
  },
];

const MeditationList = () => {
  return (
    <View className="pb-6 bg-[#122931]">
      <FlatList
        data={Lists}
        renderItem={({ item }) => (
          <MeditationCard img={item.img} text={item.text} />
        )}
      />
    </View>
  );
};

export default MeditationList;
