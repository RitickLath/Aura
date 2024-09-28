import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import AffirmationCard from "../Components/AffirmationCard";
import { sections } from "../../constants/AffitmationImports";

// Affirmation Images

const AffirmationList = () => {
  return (
    <View className="pb-6 bg-[#122931] pt-[90px]">
      <ScrollView className="">
        {/* Loop through each section */}
        {sections.map((section, index) => (
          <View key={index} className="mt-4 mb-23">
            <Text className="mx-3 text-xl font-semibold text-white">
              {section.title}
            </Text>
            <FlatList
              data={section.data}
              horizontal
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <AffirmationCard
                  img={item.img}
                  text={item.text}
                  affirmation={item.affirmation}
                />
              )}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 10 }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default AffirmationList;
