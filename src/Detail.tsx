import { View, Text, TouchableWithoutFeedback, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons } from '../constants';
import { coffees } from '../constants/text';

const Detail = ({ navigation, route }) => {
  const { id } = route.params;

  const coffee = coffees[id - 1];
  const sizes = ["S", "M", "L"];

  const [selected, setSelected] = useState(sizes[1]);

  return (
    <SafeAreaView>
      <View className="h-full bg-[#F9F9F9]">
        <ScrollView className="pt-8 h-full" contentContainerStyle={{flexGrow: 1}}>
            <View className="bg-[#F9F9F9] mx-8 flex flex-row justify-between items-center">
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <Image 
                        source={icons.left}
                        className="w-7 h-7"
                    />
                </TouchableWithoutFeedback>

                <Text className="text-[18px] font-ssemibold text-[#000]">Detail</Text>

                <TouchableWithoutFeedback>
                    <Image 
                        source={icons.like}
                        className="w-7 h-7"
                    />
                </TouchableWithoutFeedback>
            </View>

            <View className="mx-8 mt-8">
                <Image 
                    source={coffee.image}
                    className="w-full h-[200px] rounded-xl"
                    resizeMode='cover'
                />
            </View>

            <View className="mx-8 flex flex-row justify-between items-center py-6 border-b-2 border-[#E3E3E3]">
                <View>
                    <Text className="text-[22px] text-[#000] font-ssemibold mt-4">{coffee.title}</Text>
                    <Text className="text-[14px] text-[#A2A2A2] font-sregular">{coffee.desc}</Text>

                    <View className="mt-4 flex flex-row gap-2 items-center">
                        <Image source={icons.star} tintColor='#FBBE21' className="w-6 h-6" />
                        <Text className="text-[18px] text-[#000] font-ssemibold">{coffee.rating}</Text>
                        <Text className="text-[14px] text-[#A2A2A2] font-sregular">(230)</Text>
                    </View>
                </View>

                <View className="flex flex-row gap-4 items-center">
                    <TouchableOpacity activeOpacity={0.8} className="bg-[#EDEDED] p-2 rounded-xl">
                        <Image 
                            source={icons.bike}
                            className="w-8 h-8"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} className="bg-[#EDEDED] p-3 rounded-xl">
                        <Image 
                            source={icons.bean}
                            className="w-6 h-6"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} className="bg-[#EDEDED] p-3 rounded-xl">
                        <Image 
                            source={icons.milk}
                            className="w-6 h-6"
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View className="mx-8 mt-6">
                <Text className="text-[18px] font-ssemibold text-[#000]">Description</Text>
                <Text className="text-[16px] text-[#A2A2A2] font-slight mt-2">A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the fo.. <Text className="text-brown-300 font-ssemibold text-[16px]">Read More</Text></Text>
            </View>

            <View className="mx-8 mt-6 mb-8">
                <Text className="text-[18px] font-ssemibold text-[#000]">Size</Text>

                <View className="flex flex-row mt-4 gap-4">
                    {sizes.map((size) => (
                        <TouchableOpacity 
                            key={size}
                            activeOpacity={1} 
                            className={`flex items-center flex-1 ${selected === size ? 'bg-brown-100 border-brown-300' : 'bg-white border-[#E3E3E3]'} rounded-2xl border-2 px-8 py-4`}
                            onPress={() => setSelected(size)}
                        >
                            <Text className={`${selected === size ? 'text-brown-300' : 'text-[#000]'} text-[16px] font-sregular`}>{size}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <View className="mb-8 w-full p-8 flex flex-row justify-between bg-white rounded-t-3xl">
                <View>
                    <Text className="text-[16px] font-sregular text-[#909090]">Price</Text>
                    <Text className="text-[20px] font-ssemibold text-brown-300">$ {coffee.cost}</Text>
                </View>

                <TouchableOpacity 
                    activeOpacity={0.8} 
                    className="flex items-center justify-center bg-brown-300 px-16 py-4 rounded-2xl"
                    onPress={() => navigation.navigate("Order", { id: id })}
                >
                    <Text className="text-[18px] font-ssemibold text-white">Buy Now</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
      </View>

      <StatusBar backgroundColor='#F9F9F9' barStyle='dark-content' />
    </SafeAreaView>
  )
}

export default Detail