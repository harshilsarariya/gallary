import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "../src/components/Header";
import RecentImages from "../src/components/RecentImages";
import PictureOfTheMonth from "../src/components/PictureOfTheMonth";

const Home = () => {
  return (
    <View>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <PictureOfTheMonth />
        <RecentImages />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
