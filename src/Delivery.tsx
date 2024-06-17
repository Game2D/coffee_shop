import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import YaMap, { Marker, Polyline } from 'react-native-yamap';
import { icons } from '../constants';

const Delivery = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View className="w-full h-full bg-[#F9F9F9]">
        <YaMap
          showUserPosition={false}
          rotateGesturesEnabled={false}
          nightMode={false}
          mapType={'vector'}
          initialRegion={{
              lat: 55.178925, 
              lon: 61.332927,
              zoom: 17,
              azimuth: 0,
              }}
          style={{ flex: 1 }}
        >           
            <Marker 
                children={
                    <View className="bg-white rounded-full p-3 w-[55px] drop-shadow-2xl">
                        <Image source={icons.bike} className="w-10 h-10" />
                    </View>
                }
                point={{ lat: 55.178925, lon: 61.332927 }}
            /> 
            <Marker 
                children={
                    <Image source={icons.pin} className="w-10 h-10" />
                }
                point={{ lat: 55.180789, lon: 61.334294 }}
            /> 
            <Polyline
                points={[
                    { lat: 55.178925, lon: 61.332927 },
                    { lat: 55.179210, lon: 61.332793 },
                    { lat: 55.180116, lon: 61.332775 },
                    { lat: 55.180783, lon: 61.332764 },
                    { lat: 55.180781, lon: 61.333811 },
                    { lat: 55.180789, lon: 61.334294 },
                ]}
                strokeColor='#C67C4E'
                strokeWidth={4}
                zIndex={4}
            />
        </YaMap>

        <View className="flex flex-row justify-between absolute top-10 px-8 w-full">
            <TouchableOpacity activeOpacity={0.8} className="bg-[#EDEDED] p-3 rounded-2xl" onPress={() => navigation.goBack()}>
                <Image 
                    source={icons.left}
                    className="w-7 h-7"
                />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} className="bg-[#EDEDED] p-3 rounded-2xl">
                <Image 
                    source={icons.gps}
                    className="w-7 h-7"
                />
            </TouchableOpacity>
        </View>

        <View className="flex justify-center items-center absolute bg-white p-8 w-full bottom-0 rounded-t-3xl">
            <View className="bg-[#E3E3E3] w-16 h-2 rounded-full" />
            
            <View className="mt-4">
                <Text className="text-[18px] font-ssemibold text-[#000] text-center">10 minutes left</Text>
                <Text className="text-[14px] font-ssemibold text-[#A2A2A2] text-center">
                    Delivery to {' '}

                    <Text className="text-[#000]">
                        Jl. Kpg Sutoyo
                    </Text>
                </Text>
            </View>

            <View className="flex flex-row gap-4 mt-8">
                <View className="bg-[#36C07E] flex-1 h-2 rounded-3xl" />
                <View className="bg-[#36C07E] flex-1 h-2 rounded-3xl" />
                <View className="bg-[#36C07E] flex-1 h-2 rounded-3xl" />
                <View className="bg-[#E3E3E3] flex-1 h-2 rounded-3xl" />
            </View>

            <View className="mt-6 w-full">
              <View className="flex flex-row gap-4 rounded-2xl border border-[#E3E3E3] p-4 items-center">
                <Image 
                    source={icons.bike}
                    className="w-8 h-8 border border-[#E3E3E3] rounded-xl p-8"
                />

                <View>
                    <Text className="font-ssemibold text-[16px] text-[#000]">Delivered your order</Text>
                    <Text className="flex font-slight text-[14px] text-[#A2A2A2]">We will deliver your goods to {'\n'}you in the shortes possible time.</Text>
                </View>
              </View>
            </View>

            <View className="mt-6 flex flex-row justify-between items-center w-full">
                <View className="flex flex-row gap-4 items-center">
                    <Image 
                        source={icons.profile}
                        className="w-20 h-20"
                    /> 

                    <View>
                        <Text className="font-ssemibold text-[16px] text-[#000]">Brooklyn Simmons</Text>
                        <Text className="font-sregular text-[14px] text-[#A2A2A2]">Personal Courier</Text>
                    </View>
                </View>

                <TouchableOpacity 
                    activeOpacity={0.8}
                    className="border border-[#E3E3E3] rounded-2xl p-3"
                >
                    <Image 
                        source={icons.phone}
                        className="w-7 h-7"
                    />
                </TouchableOpacity>
            </View>
        </View>
      </View>

      <StatusBar backgroundColor='#F9F9F9' barStyle='dark-content' />
    </SafeAreaView>
  )
}

export default Delivery