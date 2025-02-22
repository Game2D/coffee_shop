import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Notify = () => {
  return (
    <SafeAreaView>
      <View className="w-full h-full flex justify-center items-center">
        <Text className="text-[32px] font-ssemibold text-[#000]">Nothing here</Text>
      </View>
    </SafeAreaView>
  )
}

export default Notify