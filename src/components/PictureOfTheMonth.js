import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ImageCard from "./ImageCard";

const PictureOfTheMonth = () => {
  let recent = true;
  return (
    <View>
      <View>
        <ImageCard recent={recent} />
      </View>
    </View>
  );
};

export default PictureOfTheMonth;

const styles = StyleSheet.create({});
