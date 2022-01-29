import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ImageCard from "./ImageCard";

const RecentImages = () => {
  return (
    <View
      style={{
        paddingBottom: 70,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <View>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Recently</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={{ fontSize: 20, fontWeight: "700", color: "gray" }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageCard />
      </ScrollView>
    </View>
  );
};

export default RecentImages;

const styles = StyleSheet.create({});
