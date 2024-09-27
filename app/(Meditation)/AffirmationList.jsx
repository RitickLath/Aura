import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import AffirmationCard from "../Components/AffirmationCard";

// Affirmation Images
const img1 = require("../../assets/affirmation-images/California-backyard-1.webp");
const img2 = require("../../assets/affirmation-images/California-backyard-2.webp");
const img3 = require("../../assets/affirmation-images/California-backyard-3.webp");
const img4 = require("../../assets/affirmation-images/California-backyard-4.webp");

const img5 = require("../../assets/affirmation-images/english-countryside-1.webp");
const img6 = require("../../assets/affirmation-images/english-countryside-2.webp");
const img7 = require("../../assets/affirmation-images/english-countryside-3.webp");
const img8 = require("../../assets/affirmation-images/english-countryside-4.webp");

const img9 = require("../../assets/affirmation-images/mountain-meditate-1.webp");
const img10 = require("../../assets/affirmation-images/mountain-meditate-2.webp");
const img11 = require("../../assets/affirmation-images/mountain-meditate-3.webp");
const img12 = require("../../assets/affirmation-images/mountain-meditate-4.webp");

const img13 = require("../../assets/affirmation-images/night-sky-1.webp");
const img14 = require("../../assets/affirmation-images/night-sky-2.webp");
const img15 = require("../../assets/affirmation-images/night-sky-3.webp");
const img16 = require("../../assets/affirmation-images/night-sky-4.webp");

const img17 = require("../../assets/affirmation-images/relaxing-river-1.webp");
const img18 = require("../../assets/affirmation-images/relaxing-river-2.webp");
const img19 = require("../../assets/affirmation-images/relaxing-river-3.webp");
const img20 = require("../../assets/affirmation-images/relaxing-river-4.webp");

const img21 = require("../../assets/affirmation-images/Tuscanny-1.webp");
const img22 = require("../../assets/affirmation-images/Tuscanny-2.webp");
const img23 = require("../../assets/affirmation-images/Tuscanny-3.webp");
const img24 = require("../../assets/affirmation-images/Tuscanny-4.webp");

// List Data
const List1 = [
  { img: img1, text: "California1" },
  { img: img2, text: "California2" },
  { img: img3, text: "California3" },
  { img: img4, text: "California4" },
];

const List2 = [
  { img: img5, text: "English Countryside 1" },
  { img: img6, text: "English Countryside 2" },
  { img: img7, text: "English Countryside 3" },
  { img: img8, text: "English Countryside 4" },
];

const List3 = [
  { img: img9, text: "Mountain Meditate 1" },
  { img: img10, text: "Mountain Meditate 2" },
  { img: img11, text: "Mountain Meditate 3" },
  { img: img12, text: "Mountain Meditate 4" },
];

const List4 = [
  { img: img13, text: "Night Sky 1" },
  { img: img14, text: "Night Sky 2" },
  { img: img15, text: "Night Sky 3" },
  { img: img16, text: "Night Sky 4" },
];

const List5 = [
  { img: img17, text: "Relaxing River 1" },
  { img: img18, text: "Relaxing River 2" },
  { img: img19, text: "Relaxing River 3" },
  { img: img20, text: "Relaxing River 4" },
];

const List6 = [
  { img: img21, text: "Tuscanny 1" },
  { img: img22, text: "Tuscanny 2" },
  { img: img23, text: "Tuscanny 3" },
  { img: img24, text: "Tuscanny 4" },
];

// Sections List
const sections = [
  { title: "Positivity", data: List1 },
  { title: "Reduce Anxiety", data: List2 },
  { title: "Success", data: List3 },
  { title: "Self-Belief", data: List4 },
  { title: "Gratitude", data: List5 },
  { title: "Mindfulness", data: List6 },
];

const AffirmationList = () => {
  return (
    <ScrollView className="px-1 bg-[#122931]">
      {/* Loop through each section */}
      {sections.map((section, index) => (
        <View key={index} className="mt-4 mb-3">
          <Text className="mx-3 text-xl font-semibold text-white">
            {section.title}
          </Text>
          <FlatList
            data={section.data}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <AffirmationCard img={item.img} text={item.text} />
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 10 }}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default AffirmationList;
