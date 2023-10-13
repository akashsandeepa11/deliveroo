import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Path, Svg } from "react-native-svg";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
// import sanityClient from "../../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();

  // const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // useEffect(() => {
  //   sanityClient
  //     .fetch(
  //       `
  //       *[type == "featured"]{
  //         ...,
  //         retaurant[]->{
  //           ...,
  //           dishes[]->
  //         }
  //       }`
  //     )
  //     .then((data) => {
  //       setFeaturedCategories(data);
  //     });
  // }, []);

  // console.log(featuredCategories); 

  return (
    <SafeAreaView className="bg-white">
      <View>
        {/* header  */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
          <Image
            source={{
              uri: "https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450",
            }}
            className=" w-7 h-7 bg-gray-300 p-4 rounded-full"
          />
          <View className="flex-1">
            <Text className=" font-bold text-xs text-gray-400">
              Deliver Now!
            </Text>
            <Text className=" font-bold text-xl">
              Current Location
              <View className="w-4 h-3 items-center justify-center flex  ">
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className=" w-5 h-5 text-[#00CCBB] ml-2"
                >
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </Svg>
              </View>
            </Text>
          </View>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 color-[#00CCBB]"
          >
            <Path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </Svg>
        </View>
        {/* Search */}
        <View className="flex-row justify-between items-center mx-4 pb-2">
          <View className="flex-row bg-gray-200 items-center flex-1 p-2 space-x-2">
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-500 "
            >
              <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </Svg>
            <TextInput
              placeholder="Restaurants and cuisines"
              keyboardType="default"
            />
          </View>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-[#00CCBB]"
          >
            <Path d="M6 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 111.5 0v7.5A.75.75 0 016 12zM18 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0118 12zM6.75 20.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM18.75 18.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 011.5 0zM12.75 5.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM12 21a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0112 21zM3.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0zM12 11.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM15.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0z" />
          </Svg>
        </View>
        <ScrollView className=" bg-gray-100 mb-56">
          {/* Categories */}
          <Categories />

          {/* Featured */}
          <FeaturedRow
            id={123}
            title="Featured"
            description="Paid placements from our partners"
            featuredCategory="featured"
          />
          {/* Tasty discounts */}
          <FeaturedRow
            id={1234}
            title="Tasty discounts"
            description="Everyones been enjoynig these juicy discounts"
            featuredCategory="discounts"
          />
          {/* Offers near you */}
          <FeaturedRow
            id={12345}
            title="Offers near you"
            description="Why not support you local restaurant tonight!"
            featuredCategory="offers"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
