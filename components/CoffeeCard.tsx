import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons } from '../constants';

type CoffeeCardProps = {
    image: string;
    title: string;
    description: string;
    cost: number;
    rating: number;
    onPress?: () => void;
};

const CoffeeCard = ({ image, title, description, cost, rating, onPress }: CoffeeCardProps) => {
  return (
    <View className="relative p-4 w-[170px] bg-white rounded-xl">
      <View className="absolute flex flex-row gap-1 items-center right-7 top-6 z-50 bg-black/80 p-1 rounded-xl">
        <Image 
            source={icons.star}
            tintColor='#FBBE21'
            className="w-4 h-4"
        />
        <Text
            className="text-[10px] text-white font-ssemibold"
        >{rating}</Text>
      </View>

      <Image  
        source={image}
        className="w-[140px] h-[128px] rounded-2xl"
        resizeMode='cover'
      />

      <View className="mt-4">
        <Text className="text-[18px] font-ssemibold text-[#000]">{title}</Text>        
        <Text className="text-[14px] font-sregular text-[#A2A2A2]">{description}</Text>

        <View className="flex flex-row justify-between mt-4">
            <Text className="text-[18px] font-ssemibold text-[#000]">$ {cost}</Text>
            
            <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
                <Image 
                    source={icons.add}
                />
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default CoffeeCard