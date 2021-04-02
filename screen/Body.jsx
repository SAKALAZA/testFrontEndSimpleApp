import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import axios from "axios";
import { urlBase } from "./URLBase";

function Body(props) {
  const [rqProduct, setrqProduct] = useState([]);

  // async function apiTake() {
  //   try {
  //     await axios
  //       .get(`${urlBase}api/AllProduct/GetAllProduct`)
  //       .then((response) => {
  //         const allproduct = response.data.rqProduct.allproduct;
  //         setrqProduct(allproduct);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  const apiTake = () => {
    axios.get(`${urlBase}api/AllProduct/GetAllProduct`).then((response) => {
      const allproduct = response.data.rqProduct.allproduct;
      setrqProduct(allproduct);
    });
  };

  useEffect(() => {
    apiTake();
  }, []);

  return (
    <ScrollView>
      <View style={{ backgroundColor: "#fff" }}>
        <Text
          style={{
            textAlign: "left",
            fontWeight: "bold",
            fontSize: 16,
            color: "#41424C",
            paddingLeft: 5,
            paddingTop: 10,
          }}
        >
          {" "}
          Poppular{" "}
        </Text>
        <View style={styles.Box1}>
          <ScrollView horizontal={true}>
            {/* {rqProduct.map((item) => (
              <View style={styles.Box2}>
                <View style={styles.Box3}>
                  <Image
                    style={{ width: "100%", height: 100, borderRadius: 5 }}
                    source={require("../assets/iPhone8.png")}
                    // source={require(`../assets/${item.Images}`)}
                    resizeMode="stretch"
                  />
                </View>
                <View>
                  <Text>
                    {item.Price} {item.Moneytary}{" "}
                  </Text>
                  <Text> {item.PName} </Text>
                </View>
              </View>
            ))} */}
            <View style={styles.Box2}>
              <View style={styles.Box3}>
                <Image
                  style={{ width: "100%", height: 100, borderRadius: 5 }}
                  source={require("../assets/Iphone11promax.jpg")}
                  resizeMode="stretch"
                />
              </View>
              <View>
                <Text
                  style={{ fontWeight: "bold", marginTop: 10, marginLeft: 5 }}
                >
                  {" "}
                  9,600,000 KIP{" "}
                </Text>
                <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                  {" "}
                  Iphone 11 Pro Max{" "}
                </Text>
              </View>
            </View>
            <View style={styles.Box2}>
              <View style={styles.Box3}>
                <Image
                  style={{ width: "100%", height: 100, borderRadius: 5 }}
                  source={require("../assets/Iphone12pro.jpeg")}
                  resizeMode="stretch"
                />
              </View>
              <View>
                <Text
                  style={{ fontWeight: "bold", marginTop: 10, marginLeft: 5 }}
                >
                  {" "}
                  13,800,000 KIP{" "}
                </Text>
                <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                  {" "}
                  Iphone 12 Pro{" "}
                </Text>
              </View>
            </View>
            <View style={styles.Box2}>
              <View style={styles.Box3}>
                <Image
                  style={{ width: "100%", height: 100, borderRadius: 5 }}
                  source={require("../assets/iphone12promax.jpg")}
                  resizeMode="stretch"
                />
              </View>
              <View>
                <Text
                  style={{ fontWeight: "bold", marginTop: 10, marginLeft: 5 }}
                >
                  {" "}
                  14,200,000 KIP{" "}
                </Text>
                <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                  {" "}
                  Iphone 12 Pro Max{" "}
                </Text>
              </View>
            </View>
            <View style={styles.Box2}>
              <View style={styles.Box3}>
                <Image
                  style={{ width: "100%", height: 100, borderRadius: 5 }}
                  source={require("../assets/macbookpro13.jpg")}
                  resizeMode="stretch"
                />
              </View>
              <View>
                <Text
                  style={{ fontWeight: "bold", marginTop: 10, marginLeft: 5 }}
                >
                  {" "}
                  15,000,000 KIP{" "}
                </Text>
                <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                  {" "}
                  Macbook Pro 13{" "}
                </Text>
              </View>
            </View>
            <View style={styles.Box2}>
              <View style={styles.Box3}>
                <Image
                  style={{ width: "100%", height: 100, borderRadius: 5 }}
                  source={require("../assets/Macbookpro16.jpg")}
                  resizeMode="stretch"
                />
              </View>
              <View>
                <Text
                  style={{ fontWeight: "bold", marginTop: 10, marginLeft: 5 }}
                >
                  {" "}
                  25,000,000 KIP{" "}
                </Text>
                <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                  {" "}
                  Macbook Pro 16{" "}
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <Text
          style={{
            textAlign: "left",
            fontWeight: "bold",
            fontSize: 16,
            color: "#41424C",
            paddingLeft: 5,
            paddingTop: 10,
          }}
        >
          {" "}
          Recommanded Item{" "}
        </Text>

        <View style={styles.Box1}>
          <ScrollView horizontal={true}>
            <View style={styles.Box2}>
              <View style={styles.Box3}>
                <Image
                  style={{ width: "100%", height: 100, borderRadius: 5 }}
                  source={require("../assets/macbookpro13.jpg")}
                  resizeMode="stretch"
                />
              </View>
              <View>
                <Text
                  style={{ fontWeight: "bold", marginTop: 10, marginLeft: 5 }}
                >
                  {" "}
                  15,000,000 KIP{" "}
                </Text>
                <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                  {" "}
                  Macbook Pro 13{" "}
                </Text>
              </View>
            </View>
            <View style={styles.Box2}>
              <View style={styles.Box3}>
                <Image
                  style={{ width: "100%", height: 100, borderRadius: 5 }}
                  source={require("../assets/Macbookpro16.jpg")}
                  resizeMode="stretch"
                />
              </View>
              <View>
                <Text
                  style={{ fontWeight: "bold", marginTop: 10, marginLeft: 5 }}
                >
                  {" "}
                  25,000,000 KIP{" "}
                </Text>
                <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                  {" "}
                  Macbook Pro 16{" "}
                </Text>
              </View>
            </View>
            <View style={styles.Box2}>
              <View style={styles.Box3}>
                <Image
                  style={{ width: "100%", height: 100, borderRadius: 5 }}
                  source={require("../assets/Iphone12pro.jpeg")}
                  resizeMode="stretch"
                />
              </View>
              <View>
                <Text
                  style={{ fontWeight: "bold", marginTop: 10, marginLeft: 5 }}
                >
                  {" "}
                  13,800,000 KIP{" "}
                </Text>
                <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                  {" "}
                  Iphone 12 Pro{" "}
                </Text>
              </View>
            </View>
            <View style={styles.Box2}>
              <View style={styles.Box3}>
                <Image
                  style={{ width: "100%", height: 100, borderRadius: 5 }}
                  source={require("../assets/Iphone11pro.png")}
                  resizeMode="stretch"
                />
              </View>
              <View>
                <Text
                  style={{ fontWeight: "bold", marginTop: 10, marginLeft: 5 }}
                >
                  {" "}
                  8,500,000 KIP{" "}
                </Text>
                <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                  {" "}
                  Iphone 11 Pro{" "}
                </Text>
              </View>
            </View>
            <View style={styles.Box2}>
              <View style={styles.Box3}>
                <Image
                  style={{ width: "100%", height: 100, borderRadius: 5 }}
                  source={require("../assets/Iphone8plus.jpg")}
                  resizeMode="stretch"
                />
              </View>
              <View>
                <Text
                  style={{ fontWeight: "bold", marginTop: 10, marginLeft: 5 }}
                >
                  {" "}
                  6,500,000 KIP{" "}
                </Text>
                <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                  {" "}
                  Iphone 8 Plus{" "}
                </Text>
              </View>
            </View>
            <View style={styles.Box2}>
              <View style={styles.Box3}>
                <Image
                  style={{ width: "100%", height: 100, borderRadius: 5 }}
                  source={require("../assets/iPhone8.png")}
                  resizeMode="stretch"
                />
              </View>
              <View>
                <Text
                  style={{ fontWeight: "bold", marginTop: 10, marginLeft: 5 }}
                >
                  {" "}
                  5,000,000 KIP{" "}
                </Text>
                <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                  {" "}
                  Iphone 8{" "}
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <Text
          style={{
            textAlign: "left",
            fontWeight: "bold",
            fontSize: 16,
            color: "#41424C",
            paddingLeft: 5,
            paddingTop: 10,
          }}
        >
          {" "}
          All Products{" "}
        </Text>

        <View style={styles.Box4}>
          <View style={styles.Box6}>
            <View style={styles.Box5}>
              <View style={styles.Box3}>
                <Image
                  style={{ width: "100%", height: 100, borderRadius: 5 }}
                  source={require("../assets/Iphone7.jpg")}
                  resizeMode="stretch"
                />
              </View>
              <View>
                <Text
                  style={{ fontWeight: "bold", marginTop: 10, marginLeft: 5 }}
                >
                  {" "}
                  3,300,000 KIP{" "}
                </Text>
                <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                  {" "}
                  Iphone 7{" "}
                </Text>
              </View>
            </View>
            <View style={styles.Box5}>
              <View style={styles.Box3}>
                <Image
                  style={{ width: "100%", height: 100, borderRadius: 5 }}
                  source={require("../assets/iphone7plus.jpg")}
                  resizeMode="stretch"
                />
              </View>
              <View>
                <Text
                  style={{ fontWeight: "bold", marginTop: 10, marginLeft: 5 }}
                >
                  {" "}
                  4,500,000 KIP{" "}
                </Text>
                <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                  {" "}
                  Iphone 7 Plus{" "}
                </Text>
              </View>
            </View>
            <View style={styles.Box5}>
              <View style={styles.Box3}>
                <Image
                  style={{ width: "100%", height: 100, borderRadius: 5 }}
                  source={require("../assets/iPhone8.png")}
                  resizeMode="stretch"
                />
              </View>
              <View>
                <Text
                  style={{ fontWeight: "bold", marginTop: 10, marginLeft: 5 }}
                >
                  {" "}
                  5,000,000 KIP{" "}
                </Text>
                <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                  {" "}
                  Iphone 8{" "}
                </Text>
              </View>
            </View>
            <View style={styles.Box5}>
              <View style={styles.Box3}>
                <Image
                  style={{ width: "100%", height: 100, borderRadius: 5 }}
                  source={require("../assets/Iphone8plus.jpg")}
                  resizeMode="stretch"
                />
              </View>
              <View>
                <Text
                  style={{ fontWeight: "bold", marginTop: 10, marginLeft: 5 }}
                >
                  {" "}
                  6,500,000 KIP{" "}
                </Text>
                <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                  {" "}
                  Iphone 8 Plus{" "}
                </Text>
              </View>
            </View>
            <View style={styles.Box5}>
              <View style={styles.Box3}>
                <Image
                  style={{ width: "100%", height: 100, borderRadius: 5 }}
                  source={require("../assets/Iphone11pro.png")}
                  resizeMode="stretch"
                />
              </View>
              <View>
                <Text
                  style={{ fontWeight: "bold", marginTop: 10, marginLeft: 5 }}
                >
                  {" "}
                  8,500,000 KIP{" "}
                </Text>
                <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                  {" "}
                  Iphone 11 Pro{" "}
                </Text>
              </View>
            </View>
            <View style={styles.Box5}>
              <View style={styles.Box3}>
                <Image
                  style={{ width: "100%", height: 100, borderRadius: 5 }}
                  source={require("../assets/Iphone11promax.jpg")}
                  resizeMode="stretch"
                />
              </View>
              <View>
                <Text
                  style={{ fontWeight: "bold", marginTop: 10, marginLeft: 5 }}
                >
                  {" "}
                  9,600,000 KIP{" "}
                </Text>
                <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                  {" "}
                  Iphone 11 Pro Max{" "}
                </Text>
              </View>
            </View>
            <View style={styles.Box5}>
              <View style={styles.Box3}>
                <Image
                  style={{ width: "100%", height: 100, borderRadius: 5 }}
                  source={require("../assets/Iphone12pro.jpeg")}
                  resizeMode="stretch"
                />
              </View>
              <View>
                <Text
                  style={{ fontWeight: "bold", marginTop: 10, marginLeft: 5 }}
                >
                  {" "}
                  13,800,000 KIP{" "}
                </Text>
                <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                  {" "}
                  Iphone 12 Pro{" "}
                </Text>
              </View>
            </View>
            <View style={styles.Box5}>
              <View style={styles.Box3}>
                <Image
                  style={{ width: "100%", height: 100, borderRadius: 5 }}
                  source={require("../assets/iphone12promax.jpg")}
                  resizeMode="stretch"
                />
              </View>
              <View>
                <Text
                  style={{ fontWeight: "bold", marginTop: 10, marginLeft: 5 }}
                >
                  {" "}
                  14,200,000 KIP{" "}
                </Text>
                <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                  {" "}
                  Iphone 12 Pro Max{" "}
                </Text>
              </View>
            </View>
            <View style={styles.Box5}>
              <View style={styles.Box3}>
                <Image
                  style={{ width: "100%", height: 100, borderRadius: 5 }}
                  source={require("../assets/macbookpro13.jpg")}
                  resizeMode="stretch"
                />
              </View>
              <View>
                <Text
                  style={{ fontWeight: "bold", marginTop: 10, marginLeft: 5 }}
                >
                  {" "}
                  15,000,000 KIP{" "}
                </Text>
                <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                  {" "}
                  Macbook Pro 13{" "}
                </Text>
              </View>
            </View>
            <View style={styles.Box5}>
              <View style={styles.Box3}>
                <Image
                  style={{ width: "100%", height: 100, borderRadius: 5 }}
                  source={require("../assets/Macbookpro16.jpg")}
                  resizeMode="stretch"
                />
              </View>
              <View>
                <Text
                  style={{ fontWeight: "bold", marginTop: 10, marginLeft: 5 }}
                >
                  {" "}
                  25,000,000 KIP{" "}
                </Text>
                <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                  {" "}
                  Macbook Pro 16{" "}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  Box1: {
    justifyContent: "flex-start",
    height: 210,
    backgroundColor: "#fff",
    marginTop: 5,
    flexDirection: "row",
  },
  Box2: {
    justifyContent: "flex-start",
    width: 170,
    height: 200,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  Box3: {
    justifyContent: "flex-start",
    width: "100%",
    height: 100,
    backgroundColor: "#fff",
  },
  Box4: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 5,
    marginBottom: 10,
  },
  Box5: {
    width: 170,
    height: 200,
    backgroundColor: "#fff",
    marginTop: 5,
    marginLeft: 10,
    marginRight: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  Box6: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
  },
});
export default Body;
