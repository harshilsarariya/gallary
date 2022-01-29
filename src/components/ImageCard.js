import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  LogBox,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
const img = [
  {
    add: require("../../assets/1.jpg"),
  },
  {
    add: require("../../assets/2.jpg"),
  },
  {
    add: require("../../assets/3.jpg"),
  },
  {
    add: require("../../assets/4.jpg"),
  },
  {
    add: require("../../assets/5.jpg"),
  },
  {
    add: require("../../assets/6.jpg"),
  },
];

const ImageCard = (props) => {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);
  return (
    <>
      <View style={{ borderRadius: 20 }}>
        {props.recent && (
          <ImageBackground
            borderRadius={20}
            style={{
              width: "100%",
              height: 200,
              marginTop: 20,
            }}
            source={require("../../assets/6.jpg")}
          >
            <View style={styles.textView}>
              <Text style={styles.imageText}>Picture of The Month</Text>
            </View>
            <TouchableOpacity activeOpacity={0.7} style={styles.textView2}>
              <AntDesign name="heart" size={18} style={{ color: "white" }} />
            </TouchableOpacity>
          </ImageBackground>
        )}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          {props.recent || (
            <FlatList
              scrollEnabled={false}
              data={img}
              numColumns={2}
              key={2}
              keyExtractor={(item, index) => index}
              renderItem={({ item }) => (
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    margin: 1,
                  }}
                >
                  <ImageBackground
                    borderRadius={20}
                    style={{
                      width: 155,
                      height: 150,
                      marginTop: 20,
                    }}
                    source={item.add}
                  >
                    <View style={[styles.textView]}>
                      <Text style={styles.imageText}>Name</Text>
                    </View>
                    <TouchableOpacity
                      activeOpacity={0.9}
                      style={styles.textView2}
                    >
                      <AntDesign
                        name="heart"
                        size={18}
                        style={{ color: "white" }}
                      />
                    </TouchableOpacity>
                  </ImageBackground>
                </View>
              )}
            />
          )}
        </View>
      </View>
    </>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  text: {
    backgroundColor: "gray",
    marginRight: 20,
  },
  textView: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
    padding: 5,
    paddingRight: 20,
    paddingLeft: 10,
    borderRadius: 10,
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  imageText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    margin: 0,
  },
  textView2: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 10,
    right: 20,
    backgroundColor: "#153D51",
    padding: 7,
    borderRadius: 20,
    paddingTop: 7,
    opacity: 0.6,
  },
});
