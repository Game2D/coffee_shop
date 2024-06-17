import { View, Text, TouchableWithoutFeedback, Image, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons } from '../constants';
import { coffees } from '../constants/text';

const Order = ({ navigation, route }) => {
  const { id } = route.params;

  const cargo = ['Deliver', 'Pick up'];
  const [selected, setSelected] = useState(cargo[0]);
  const [count, setCount] = useState(1);

  const coffee = coffees[id - 1];

  return (
    <SafeAreaView>
      <View className="w-full h-full bg-[#F9F9F9]">
      <ScrollView className="pt-8 h-full" contentContainerStyle={{flexGrow: 1}}>
        <View className="mx-8 flex flex-row justify-between items-center">
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <Image 
                    source={icons.left}
                    className="w-7 h-7"
                />
            </TouchableWithoutFeedback>

            <Text className="text-[18px] font-ssemibold text-[#000]">Order</Text>

            <TouchableWithoutFeedback>
                <Image 
                    source={icons.like}
                    className="w-7 h-7 invisible"
                />
            </TouchableWithoutFeedback>
        </View>

        <View className="mx-8 flex flex-row mt-10 bg-[#EDEDED] p-1 rounded-2xl">
            {cargo.map((item) => (
                <TouchableOpacity 
                    activeOpacity={1}
                    key={item}
                    className={`flex items-center flex-1 ${selected === item ? 'bg-brown-300' : ''} rounded-2xl py-2`}
                    onPress={() => setSelected(item)}
                >
                    <Text className={`${selected === item ? 'text-white' : 'text-[#000]'} text-[18px] font-ssemibold`}>{item}</Text>
                </TouchableOpacity>
            ))}
            
        </View>

        <View className="mx-8 py-6 border-b-2 border-[#E3E3E3]">
            <Text className="text-[18px] font-ssemibold text-[#000]">Delivery Address</Text>
            <Text className="text-[16px] font-ssemibold text-[#000] mt-4">Jl. Kpg Sutoyo</Text>
            <Text className="text-[14px] font-sregular text-[#A2A2A2]">Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.</Text>

            <View className="flex flex-row gap-2 mt-4">
                <TouchableOpacity activeOpacity={0.7} className="flex flex-row gap-1 px-4 py-2 items-center border border-[#A2A2A2] rounded-full">
                    <Image 
                        source={icons.edit}
                        className="w-5 h-5"
                    />
                    <Text className="text-[14px] font-sregular text-[#000]">Edit Address</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} className="flex flex-row gap-1 px-4 py-2 items-center border border-[#A2A2A2] rounded-full">
                    <Image 
                        source={icons.note}
                        className="w-5 h-5"
                    />
                    <Text className="text-[14px] font-sregular text-[#000]">Add Note</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View className="px-8 flex flex-row justify-between py-6 items-center border-b-4 border-[#F9F2ED]">
            <View className="flex flex-row gap-4 items-center">
                <Image 
                    source={coffee.image}
                    className="w-20 h-20 rounded-2xl"
                />

                <View className="flex justify-center">
                    <Text className="text-[18px] font-ssemibold text-[#000]">{coffee.title}</Text>
                    <Text className="text-[14px] font-sregular text-[#A2A2A2]">{coffee.desc}</Text>
                </View>
            </View>

            <View className="flex flex-row gap-4">
                <TouchableOpacity activeOpacity={0.8} onPress={() => {
                    if (count > 1) setCount(count - 1);
                }}>
                    <Image 
                        source={icons.minus}
                        className="w-8 h-8"
                    />
                </TouchableOpacity>
                <Text className="font-ssemibold text-[16px] text-[#000]">{count}</Text>
                <TouchableOpacity activeOpacity={0.8} onPress={() => setCount(count + 1)}>
                    <Image 
                        source={icons.plus}
                        className="w-8 h-8"
                    />
                </TouchableOpacity>
            </View>
        </View>

        <View className="mx-8 my-6">
            <TouchableOpacity activeOpacity={0.7} className="bg-white border-2 border-[#EDEDED] flex flex-row justify-between items-center p-6 rounded-2xl">
                <View className="flex flex-row gap-4 items-center justify-center">
                    <Image 
                        source={icons.percent}
                        tintColor="#C67C4E"
                        className="w-8 h-8"
                    />
                    <Text className="text-[16px] font-ssemibold text-[#000]">1 Discount is Applies</Text>
                </View>

                <Image 
                    source={icons.right}
                    className="w-6 h-6"
                />
            </TouchableOpacity>
        </View>

        <View className="mx-8 mt-6 mb-8">
            <Text className="font-ssemibold text-[#000] text-[18px]">Payment Summary</Text>
            
            <View className="flex flex-row justify-between mt-4">
                <Text className="font-sregular text-[#000] text-[16px]">Price</Text>
                <Text className="font-ssemibold text-[#000] text-[16px]">$ {(coffee.cost * count).toFixed(2)}</Text>
            </View>

            <View className="flex flex-row justify-between mt-2">
                <Text className="font-sregular text-[#000] text-[16px]">Delivery Fee</Text>
                <Text className="font-ssemibold text-[#000] text-[16px]">
                    <Text className="line-through font-sregular">$ 2.0</Text>{'  '}
                    $ 1.0
                </Text>
            </View>
        </View>

        <View className="fixed mb-8 mt-auto bg-white rounded-t-2xl p-8">
            <View className="flex flex-row justify-between items-center">
                <View className="flex flex-row items-center gap-4">
                    <Image 
                        source={icons.wallet}
                        className="w-7 h-7"
                    />

                    <View>
                        <Text className="text-[16px] font-ssemibold text-[#000]">Cash/Wallet</Text>
                        <Text className="text-[14px] font-ssemibold text-brown-300">$ {((coffee.cost * count) + 1).toFixed(2)}</Text>
                    </View>
                </View>

                <Image source={icons.down} className="w-5 h-5" />
            </View>

            <TouchableOpacity 
                activeOpacity={0.8} 
                className="flex items-center justify-center bg-brown-300 px-16 py-4 rounded-2xl mt-6"
                onPress={() => navigation.navigate("Delivery")}
            >
                <Text className="text-[18px] font-ssemibold text-white">Order</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
      </View>

      <StatusBar backgroundColor='#F9F9F9' barStyle='dark-content' />
    </SafeAreaView>
  )
}

export default Order